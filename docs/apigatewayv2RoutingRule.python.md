# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-aws.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  priority: typing.Union[int, float],
  action: IResolvable | typing.List[Apigatewayv2RoutingRuleAction] = None,
  condition: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.action">action</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.condition">condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.action"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.condition"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleAction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition"></a>

```python
def put_condition(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">routing_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">routing_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput">action_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput">condition_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action"></a>

```python
action: Apigatewayv2RoutingRuleActionList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition"></a>

```python
condition: Apigatewayv2RoutingRuleConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a>

---

##### `routing_rule_arn`<sup>Required</sup> <a name="routing_rule_arn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```python
routing_rule_arn: str
```

- *Type:* str

---

##### `routing_rule_id`<sup>Required</sup> <a name="routing_rule_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```python
routing_rule_id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[Apigatewayv2RoutingRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput"></a>

```python
condition_input: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleAction <a name="Apigatewayv2RoutingRuleAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction(
  invoke_api: IResolvable | typing.List[Apigatewayv2RoutingRuleActionInvokeApi] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi">invoke_api</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]</code> | invoke_api block. |

---

##### `invoke_api`<sup>Optional</sup> <a name="invoke_api" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi"></a>

```python
invoke_api: IResolvable | typing.List[Apigatewayv2RoutingRuleActionInvokeApi]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]

invoke_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionInvokeApi <a name="Apigatewayv2RoutingRuleActionInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi(
  api_id: str,
  stage: str,
  strip_base_path: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath">strip_base_path</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}. |

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}.

---

##### `strip_base_path`<sup>Optional</sup> <a name="strip_base_path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath"></a>

```python
strip_base_path: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}.

---

### Apigatewayv2RoutingRuleCondition <a name="Apigatewayv2RoutingRuleCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition(
  match_base_paths: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchBasePaths] = None,
  match_headers: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeaders] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths">match_base_paths</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]</code> | match_base_paths block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders">match_headers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]</code> | match_headers block. |

---

##### `match_base_paths`<sup>Optional</sup> <a name="match_base_paths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths"></a>

```python
match_base_paths: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchBasePaths]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]

match_base_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `match_headers`<sup>Optional</sup> <a name="match_headers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders"></a>

```python
match_headers: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]

match_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths(
  any_of: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}. |

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}.

---

### Apigatewayv2RoutingRuleConditionMatchHeaders <a name="Apigatewayv2RoutingRuleConditionMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders(
  any_of: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf">any_of</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]</code> | any_of block. |

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf"></a>

```python
any_of: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf(
  header: str,
  value_glob: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob">value_glob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}.

---

##### `value_glob`<sup>Required</sup> <a name="value_glob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob"></a>

```python
value_glob: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}.

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  priority: typing.Union[int, float],
  action: IResolvable | typing.List[Apigatewayv2RoutingRuleAction] = None,
  condition: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action"></a>

```python
action: IResolvable | typing.List[Apigatewayv2RoutingRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition"></a>

```python
condition: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionInvokeApiList <a name="Apigatewayv2RoutingRuleActionInvokeApiList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleActionInvokeApiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleActionInvokeApi]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]

---


### Apigatewayv2RoutingRuleActionInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionInvokeApiOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath">reset_strip_base_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_strip_base_path` <a name="reset_strip_base_path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath"></a>

```python
def reset_strip_base_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput">strip_base_path_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath">strip_base_path</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `strip_base_path_input`<sup>Optional</sup> <a name="strip_base_path_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput"></a>

```python
strip_base_path_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `strip_base_path`<sup>Required</sup> <a name="strip_base_path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath"></a>

```python
strip_base_path: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionList <a name="Apigatewayv2RoutingRuleActionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>]

---


### Apigatewayv2RoutingRuleActionOutputReference <a name="Apigatewayv2RoutingRuleActionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi">put_invoke_api</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi">reset_invoke_api</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invoke_api` <a name="put_invoke_api" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi"></a>

```python
def put_invoke_api(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleActionInvokeApi]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]

---

##### `reset_invoke_api` <a name="reset_invoke_api" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi"></a>

```python
def reset_invoke_api() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi">invoke_api</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput">invoke_api_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_api`<sup>Required</sup> <a name="invoke_api" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi"></a>

```python
invoke_api: Apigatewayv2RoutingRuleActionInvokeApiList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a>

---

##### `invoke_api_input`<sup>Optional</sup> <a name="invoke_api_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput"></a>

```python
invoke_api_input: IResolvable | typing.List[Apigatewayv2RoutingRuleActionInvokeApi]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleAction
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>

---


### Apigatewayv2RoutingRuleConditionList <a name="Apigatewayv2RoutingRuleConditionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsList <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchBasePaths]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput">any_of_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput"></a>

```python
any_of_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput">value_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob">value_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `value_glob_input`<sup>Optional</sup> <a name="value_glob_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```python
value_glob_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value_glob`<sup>Required</sup> <a name="value_glob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```python
value_glob: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf">put_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_any_of` <a name="put_any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf"></a>

```python
def put_any_of(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]

---

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf">any_of</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput">any_of_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf"></a>

```python
any_of: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a>

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput"></a>

```python
any_of_input: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionOutputReference <a name="Apigatewayv2RoutingRuleConditionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths">put_match_base_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders">put_match_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths">reset_match_base_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders">reset_match_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_base_paths` <a name="put_match_base_paths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths"></a>

```python
def put_match_base_paths(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchBasePaths]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]

---

##### `put_match_headers` <a name="put_match_headers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders"></a>

```python
def put_match_headers(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]

---

##### `reset_match_base_paths` <a name="reset_match_base_paths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths"></a>

```python
def reset_match_base_paths() -> None
```

##### `reset_match_headers` <a name="reset_match_headers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders"></a>

```python
def reset_match_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths">match_base_paths</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders">match_headers</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput">match_base_paths_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput">match_headers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_base_paths`<sup>Required</sup> <a name="match_base_paths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths"></a>

```python
match_base_paths: Apigatewayv2RoutingRuleConditionMatchBasePathsList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a>

---

##### `match_headers`<sup>Required</sup> <a name="match_headers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders"></a>

```python
match_headers: Apigatewayv2RoutingRuleConditionMatchHeadersList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a>

---

##### `match_base_paths_input`<sup>Optional</sup> <a name="match_base_paths_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput"></a>

```python
match_base_paths_input: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchBasePaths]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>]

---

##### `match_headers_input`<sup>Optional</sup> <a name="match_headers_input" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput"></a>

```python
match_headers_input: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionMatchHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleCondition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>

---



