# `bedrockagentcoreGatewayRule` Submodule <a name="`bedrockagentcoreGatewayRule` Submodule" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRule <a name="BedrockagentcoreGatewayRule" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_identifier: str,
  priority: typing.Union[int, float],
  action: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction] = None,
  condition: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition] = None,
  description: str = None,
  region: str = None,
  timeouts: BedrockagentcoreGatewayRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.action">action</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.condition">condition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_identifier`<sup>Required</sup> <a name="gateway_identifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.action"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#action BedrockagentcoreGatewayRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.condition"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#condition BedrockagentcoreGatewayRule#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#region BedrockagentcoreGatewayRule#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#timeouts BedrockagentcoreGatewayRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition"></a>

```python
def put_condition(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#create BedrockagentcoreGatewayRule#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#delete BedrockagentcoreGatewayRule#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#update BedrockagentcoreGatewayRule#update}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreGatewayRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreGatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList">BedrockagentcoreGatewayRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList">BedrockagentcoreGatewayRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute">system_attribute</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList">BedrockagentcoreGatewayRuleSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference">BedrockagentcoreGatewayRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput">gateway_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.action"></a>

```python
action: BedrockagentcoreGatewayRuleActionList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList">BedrockagentcoreGatewayRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.condition"></a>

```python
condition: BedrockagentcoreGatewayRuleConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList">BedrockagentcoreGatewayRuleConditionList</a>

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute"></a>

```python
system_attribute: BedrockagentcoreGatewayRuleSystemList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList">BedrockagentcoreGatewayRuleSystemList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeouts"></a>

```python
timeouts: BedrockagentcoreGatewayRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference">BedrockagentcoreGatewayRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionInput"></a>

```python
condition_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_identifier_input`<sup>Optional</sup> <a name="gateway_identifier_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput"></a>

```python
gateway_identifier_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreGatewayRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_identifier`<sup>Required</sup> <a name="gateway_identifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier"></a>

```python
gateway_identifier: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRuleAction <a name="BedrockagentcoreGatewayRuleAction" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction(
  configuration_bundle: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundle] = None,
  route_to_target: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTarget] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.configurationBundle">configuration_bundle</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]</code> | configuration_bundle block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.routeToTarget">route_to_target</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]</code> | route_to_target block. |

---

##### `configuration_bundle`<sup>Optional</sup> <a name="configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.configurationBundle"></a>

```python
configuration_bundle: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]

configuration_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}

---

##### `route_to_target`<sup>Optional</sup> <a name="route_to_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.routeToTarget"></a>

```python
route_to_target: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]

route_to_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle(
  static_override: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride] = None,
  weighted_override: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.staticOverride">static_override</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]</code> | static_override block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.weightedOverride">weighted_override</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]</code> | weighted_override block. |

---

##### `static_override`<sup>Optional</sup> <a name="static_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.staticOverride"></a>

```python
static_override: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]

static_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}

---

##### `weighted_override`<sup>Optional</sup> <a name="weighted_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.weightedOverride"></a>

```python
weighted_override: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]

weighted_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride(
  bundle_arn: str,
  bundle_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleArn">bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleVersion">bundle_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundle_arn`<sup>Required</sup> <a name="bundle_arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleArn"></a>

```python
bundle_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride(
  traffic_split: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.property.trafficSplit">traffic_split</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]</code> | traffic_split block. |

---

##### `traffic_split`<sup>Optional</sup> <a name="traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.property.trafficSplit"></a>

```python
traffic_split: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]

traffic_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit(
  name: str,
  weight: typing.Union[int, float],
  configuration_bundle: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle] = None,
  description: str = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle">configuration_bundle</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]</code> | configuration_bundle block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

##### `configuration_bundle`<sup>Optional</sup> <a name="configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle"></a>

```python
configuration_bundle: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]

configuration_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle(
  bundle_arn: str,
  bundle_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn">bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion">bundle_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundle_arn`<sup>Required</sup> <a name="bundle_arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn"></a>

```python
bundle_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionRouteToTarget <a name="BedrockagentcoreGatewayRuleActionRouteToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget(
  static_route: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute] = None,
  weighted_route: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.staticRoute">static_route</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]</code> | static_route block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.weightedRoute">weighted_route</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]</code> | weighted_route block. |

---

##### `static_route`<sup>Optional</sup> <a name="static_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.staticRoute"></a>

```python
static_route: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]

static_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}

---

##### `weighted_route`<sup>Optional</sup> <a name="weighted_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.weightedRoute"></a>

```python
weighted_route: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]

weighted_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}

---

### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute(
  target_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.property.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute(
  traffic_split: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.property.trafficSplit">traffic_split</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]</code> | traffic_split block. |

---

##### `traffic_split`<sup>Optional</sup> <a name="traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.property.trafficSplit"></a>

```python
traffic_split: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]

traffic_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}

---

### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit(
  name: str,
  target_name: str,
  weight: typing.Union[int, float],
  description: str = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

### BedrockagentcoreGatewayRuleCondition <a name="BedrockagentcoreGatewayRuleCondition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition(
  match_paths: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPaths] = None,
  match_principals: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipals] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPaths">match_paths</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]</code> | match_paths block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPrincipals">match_principals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]</code> | match_principals block. |

---

##### `match_paths`<sup>Optional</sup> <a name="match_paths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPaths"></a>

```python
match_paths: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]

match_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}

---

##### `match_principals`<sup>Optional</sup> <a name="match_principals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPrincipals"></a>

```python
match_principals: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]

match_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}

---

### BedrockagentcoreGatewayRuleConditionMatchPaths <a name="BedrockagentcoreGatewayRuleConditionMatchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths(
  any_of: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipals <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals(
  any_of: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.property.anyOf">any_of</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]</code> | any_of block. |

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.property.anyOf"></a>

```python
any_of: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf(
  iam_principal: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.property.iamPrincipal">iam_principal</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]</code> | iam_principal block. |

---

##### `iam_principal`<sup>Optional</sup> <a name="iam_principal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.property.iamPrincipal"></a>

```python
iam_principal: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]

iam_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal(
  arn: str,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}.

---

### BedrockagentcoreGatewayRuleConfig <a name="BedrockagentcoreGatewayRuleConfig" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_identifier: str,
  priority: typing.Union[int, float],
  action: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction] = None,
  condition: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition] = None,
  description: str = None,
  region: str = None,
  timeouts: BedrockagentcoreGatewayRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.action">action</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.condition">condition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_identifier`<sup>Required</sup> <a name="gateway_identifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier"></a>

```python
gateway_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.action"></a>

```python
action: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#action BedrockagentcoreGatewayRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.condition"></a>

```python
condition: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#condition BedrockagentcoreGatewayRule#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#region BedrockagentcoreGatewayRule#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreGatewayRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#timeouts BedrockagentcoreGatewayRule#timeouts}

---

### BedrockagentcoreGatewayRuleSystem <a name="BedrockagentcoreGatewayRuleSystem" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem()
```


### BedrockagentcoreGatewayRuleTimeouts <a name="BedrockagentcoreGatewayRuleTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#create BedrockagentcoreGatewayRule#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#delete BedrockagentcoreGatewayRule#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/bedrockagentcore_gateway_rule#update BedrockagentcoreGatewayRule#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRuleActionConfigurationBundleList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride">put_static_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride">put_weighted_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetStaticOverride">reset_static_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetWeightedOverride">reset_weighted_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_static_override` <a name="put_static_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride"></a>

```python
def put_static_override(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]

---

##### `put_weighted_override` <a name="put_weighted_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride"></a>

```python
def put_weighted_override(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]

---

##### `reset_static_override` <a name="reset_static_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetStaticOverride"></a>

```python
def reset_static_override() -> None
```

##### `reset_weighted_override` <a name="reset_weighted_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetWeightedOverride"></a>

```python
def reset_weighted_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverride">static_override</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverride">weighted_override</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverrideInput">static_override_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverrideInput">weighted_override_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `static_override`<sup>Required</sup> <a name="static_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverride"></a>

```python
static_override: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList</a>

---

##### `weighted_override`<sup>Required</sup> <a name="weighted_override" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverride"></a>

```python
weighted_override: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList</a>

---

##### `static_override_input`<sup>Optional</sup> <a name="static_override_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverrideInput"></a>

```python
static_override_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]

---

##### `weighted_override_input`<sup>Optional</sup> <a name="weighted_override_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverrideInput"></a>

```python
weighted_override_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionConfigurationBundle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>]

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput">bundle_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput">bundle_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArn">bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersion">bundle_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_arn_input`<sup>Optional</sup> <a name="bundle_arn_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput"></a>

```python
bundle_arn_input: str
```

- *Type:* str

---

##### `bundle_version_input`<sup>Optional</sup> <a name="bundle_version_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput"></a>

```python
bundle_version_input: str
```

- *Type:* str

---

##### `bundle_arn`<sup>Required</sup> <a name="bundle_arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArn"></a>

```python
bundle_arn: str
```

- *Type:* str

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>]

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit">put_traffic_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit">reset_traffic_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_split` <a name="put_traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit"></a>

```python
def put_traffic_split(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]

---

##### `reset_traffic_split` <a name="reset_traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit"></a>

```python
def reset_traffic_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit">traffic_split</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput">traffic_split_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_split`<sup>Required</sup> <a name="traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit"></a>

```python
traffic_split: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList</a>

---

##### `traffic_split_input`<sup>Optional</sup> <a name="traffic_split_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput"></a>

```python
traffic_split_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput">bundle_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput">bundle_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn">bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion">bundle_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_arn_input`<sup>Optional</sup> <a name="bundle_arn_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput"></a>

```python
bundle_arn_input: str
```

- *Type:* str

---

##### `bundle_version_input`<sup>Optional</sup> <a name="bundle_version_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput"></a>

```python
bundle_version_input: str
```

- *Type:* str

---

##### `bundle_arn`<sup>Required</sup> <a name="bundle_arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn"></a>

```python
bundle_arn: str
```

- *Type:* str

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>]

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle">put_configuration_bundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle">reset_configuration_bundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration_bundle` <a name="put_configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle"></a>

```python
def put_configuration_bundle(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]

---

##### `reset_configuration_bundle` <a name="reset_configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle"></a>

```python
def reset_configuration_bundle() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle">configuration_bundle</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput">configuration_bundle_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_bundle`<sup>Required</sup> <a name="configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle"></a>

```python
configuration_bundle: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList</a>

---

##### `configuration_bundle_input`<sup>Optional</sup> <a name="configuration_bundle_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput"></a>

```python
configuration_bundle_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleActionList <a name="BedrockagentcoreGatewayRuleActionList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>]

---


### BedrockagentcoreGatewayRuleActionOutputReference <a name="BedrockagentcoreGatewayRuleActionOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle">put_configuration_bundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget">put_route_to_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetConfigurationBundle">reset_configuration_bundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetRouteToTarget">reset_route_to_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration_bundle` <a name="put_configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle"></a>

```python
def put_configuration_bundle(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundle]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]

---

##### `put_route_to_target` <a name="put_route_to_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget"></a>

```python
def put_route_to_target(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTarget]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]

---

##### `reset_configuration_bundle` <a name="reset_configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetConfigurationBundle"></a>

```python
def reset_configuration_bundle() -> None
```

##### `reset_route_to_target` <a name="reset_route_to_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetRouteToTarget"></a>

```python
def reset_route_to_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundle">configuration_bundle</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTarget">route_to_target</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList">BedrockagentcoreGatewayRuleActionRouteToTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundleInput">configuration_bundle_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTargetInput">route_to_target_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_bundle`<sup>Required</sup> <a name="configuration_bundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundle"></a>

```python
configuration_bundle: BedrockagentcoreGatewayRuleActionConfigurationBundleList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleList</a>

---

##### `route_to_target`<sup>Required</sup> <a name="route_to_target" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTarget"></a>

```python
route_to_target: BedrockagentcoreGatewayRuleActionRouteToTargetList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList">BedrockagentcoreGatewayRuleActionRouteToTargetList</a>

---

##### `configuration_bundle_input`<sup>Optional</sup> <a name="configuration_bundle_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundleInput"></a>

```python
configuration_bundle_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionConfigurationBundle]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>]

---

##### `route_to_target_input`<sup>Optional</sup> <a name="route_to_target_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTargetInput"></a>

```python
route_to_target_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>]

---


### BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute">put_static_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute">put_weighted_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetStaticRoute">reset_static_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetWeightedRoute">reset_weighted_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_static_route` <a name="put_static_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute"></a>

```python
def put_static_route(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]

---

##### `put_weighted_route` <a name="put_weighted_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute"></a>

```python
def put_weighted_route(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]

---

##### `reset_static_route` <a name="reset_static_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetStaticRoute"></a>

```python
def reset_static_route() -> None
```

##### `reset_weighted_route` <a name="reset_weighted_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetWeightedRoute"></a>

```python
def reset_weighted_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRoute">static_route</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRoute">weighted_route</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRouteInput">static_route_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRouteInput">weighted_route_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `static_route`<sup>Required</sup> <a name="static_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRoute"></a>

```python
static_route: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList</a>

---

##### `weighted_route`<sup>Required</sup> <a name="weighted_route" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRoute"></a>

```python
weighted_route: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList</a>

---

##### `static_route_input`<sup>Optional</sup> <a name="static_route_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRouteInput"></a>

```python
static_route_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]

---

##### `weighted_route_input`<sup>Optional</sup> <a name="weighted_route_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRouteInput"></a>

```python
weighted_route_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionRouteToTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>]

---


### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>]

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit">put_traffic_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resetTrafficSplit">reset_traffic_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_split` <a name="put_traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit"></a>

```python
def put_traffic_split(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]

---

##### `reset_traffic_split` <a name="reset_traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resetTrafficSplit"></a>

```python
def reset_traffic_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplit">traffic_split</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput">traffic_split_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_split`<sup>Required</sup> <a name="traffic_split" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplit"></a>

```python
traffic_split: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList</a>

---

##### `traffic_split_input`<sup>Optional</sup> <a name="traffic_split_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput"></a>

```python
traffic_split_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>]

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleConditionList <a name="BedrockagentcoreGatewayRuleConditionList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>]

---


### BedrockagentcoreGatewayRuleConditionMatchPathsList <a name="BedrockagentcoreGatewayRuleConditionMatchPathsList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]

---


### BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOfInput">any_of_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOfInput"></a>

```python
any_of_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleConditionMatchPaths
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal">put_iam_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resetIamPrincipal">reset_iam_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_principal` <a name="put_iam_principal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal"></a>

```python
def put_iam_principal(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]

---

##### `reset_iam_principal` <a name="reset_iam_principal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resetIamPrincipal"></a>

```python
def reset_iam_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipal">iam_principal</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput">iam_principal_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_principal`<sup>Required</sup> <a name="iam_principal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipal"></a>

```python
iam_principal: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList</a>

---

##### `iam_principal_input`<sup>Optional</sup> <a name="iam_principal_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput"></a>

```python
iam_principal_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf">put_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_any_of` <a name="put_any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf"></a>

```python
def put_any_of(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]

---

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOf">any_of</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOfInput">any_of_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOf"></a>

```python
any_of: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList</a>

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOfInput"></a>

```python
any_of_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleConditionMatchPrincipals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>

---


### BedrockagentcoreGatewayRuleConditionOutputReference <a name="BedrockagentcoreGatewayRuleConditionOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths">put_match_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals">put_match_principals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPaths">reset_match_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPrincipals">reset_match_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_paths` <a name="put_match_paths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths"></a>

```python
def put_match_paths(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPaths]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]

---

##### `put_match_principals` <a name="put_match_principals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals"></a>

```python
def put_match_principals(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]

---

##### `reset_match_paths` <a name="reset_match_paths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPaths"></a>

```python
def reset_match_paths() -> None
```

##### `reset_match_principals` <a name="reset_match_principals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPrincipals"></a>

```python
def reset_match_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPaths">match_paths</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList">BedrockagentcoreGatewayRuleConditionMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipals">match_principals</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPathsInput">match_paths_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipalsInput">match_principals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_paths`<sup>Required</sup> <a name="match_paths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPaths"></a>

```python
match_paths: BedrockagentcoreGatewayRuleConditionMatchPathsList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList">BedrockagentcoreGatewayRuleConditionMatchPathsList</a>

---

##### `match_principals`<sup>Required</sup> <a name="match_principals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipals"></a>

```python
match_principals: BedrockagentcoreGatewayRuleConditionMatchPrincipalsList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsList</a>

---

##### `match_paths_input`<sup>Optional</sup> <a name="match_paths_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPathsInput"></a>

```python
match_paths_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>]

---

##### `match_principals_input`<sup>Optional</sup> <a name="match_principals_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipalsInput"></a>

```python
match_principals_input: IResolvable | typing.List[BedrockagentcoreGatewayRuleConditionMatchPrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>

---


### BedrockagentcoreGatewayRuleSystemList <a name="BedrockagentcoreGatewayRuleSystemList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRuleSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreGatewayRuleSystemOutputReference <a name="BedrockagentcoreGatewayRuleSystemOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy">managed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_by`<sup>Required</sup> <a name="managed_by" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy"></a>

```python
managed_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreGatewayRuleSystem
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a>

---


### BedrockagentcoreGatewayRuleTimeoutsOutputReference <a name="BedrockagentcoreGatewayRuleTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_gateway_rule

bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

---



