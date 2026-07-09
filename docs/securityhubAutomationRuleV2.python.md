# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-aws.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  rule_name: str,
  rule_order: typing.Union[int, float],
  action: IResolvable | typing.List[SecurityhubAutomationRuleV2Action] = None,
  criteria: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria] = None,
  region: str = None,
  rule_status: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.action">action</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria">criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus">rule_status</a></code> | <code>str</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description"></a>

- *Type:* str

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName"></a>

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder"></a>

- *Type:* typing.Union[int, float]

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.action"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `rule_status`<sup>Optional</sup> <a name="rule_status" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus"></a>

- *Type:* str

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">reset_rule_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2Action]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]

---

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```python
def put_criteria(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule_status` <a name="reset_rule_status" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```python
def reset_rule_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">rule_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">rule_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">rule_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action"></a>

```python
action: SecurityhubAutomationRuleV2ActionList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```python
criteria: SecurityhubAutomationRuleV2CriteriaList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a>

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[SecurityhubAutomationRuleV2Action]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```python
criteria_input: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `rule_order_input`<sup>Optional</sup> <a name="rule_order_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```python
rule_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_status_input`<sup>Optional</sup> <a name="rule_status_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```python
rule_status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```python
rule_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_status`<sup>Required</sup> <a name="rule_status" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```python
rule_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Action <a name="SecurityhubAutomationRuleV2Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action(
  type: str,
  external_integration_configuration: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration] = None,
  finding_fields_update: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionFindingFieldsUpdate] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type">type</a></code> | <code>str</code> | The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration">external_integration_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]</code> | external_integration_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate">finding_fields_update</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]</code> | finding_fields_update block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type"></a>

```python
type: str
```

- *Type:* str

The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `external_integration_configuration`<sup>Optional</sup> <a name="external_integration_configuration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration"></a>

```python
external_integration_configuration: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]

external_integration_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `finding_fields_update`<sup>Optional</sup> <a name="finding_fields_update" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate"></a>

```python
finding_fields_update: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionFindingFieldsUpdate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]

finding_fields_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration(
  connector_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn">connector_arn</a></code> | <code>str</code> | The ARN of the connector. |

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

The ARN of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate(
  comment: str = None,
  severity_id: typing.Union[int, float] = None,
  status_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment">comment</a></code> | <code>str</code> | A comment for the finding. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId">severity_id</a></code> | <code>typing.Union[int, float]</code> | The severity ID to assign. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId">status_id</a></code> | <code>typing.Union[int, float]</code> | The status ID to assign. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment"></a>

```python
comment: str
```

- *Type:* str

A comment for the finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `severity_id`<sup>Optional</sup> <a name="severity_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId"></a>

```python
severity_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The severity ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `status_id`<sup>Optional</sup> <a name="status_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId"></a>

```python
status_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The status ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  rule_name: str,
  rule_order: typing.Union[int, float],
  action: IResolvable | typing.List[SecurityhubAutomationRuleV2Action] = None,
  criteria: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria] = None,
  region: str = None,
  rule_status: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">description</a></code> | <code>str</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action">action</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">rule_status</a></code> | <code>str</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```python
rule_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action"></a>

```python
action: IResolvable | typing.List[SecurityhubAutomationRuleV2Action]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```python
criteria: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `rule_status`<sup>Optional</sup> <a name="rule_status" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```python
rule_status: str
```

- *Type:* str

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria(
  ocsf_finding_criteria_json: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson">ocsf_finding_criteria_json</a></code> | <code>str</code> | JSON-encoded OCSF finding criteria for the rule. |

---

##### `ocsf_finding_criteria_json`<sup>Required</sup> <a name="ocsf_finding_criteria_json" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson"></a>

```python
ocsf_finding_criteria_json: str
```

- *Type:* str

JSON-encoded OCSF finding criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria_json SecurityhubAutomationRuleV2#ocsf_finding_criteria_json}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]

---


### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput">connector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_arn_input`<sup>Optional</sup> <a name="connector_arn_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```python
connector_arn_input: str
```

- *Type:* str

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionFindingFieldsUpdate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId">reset_severity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId">reset_status_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_severity_id` <a name="reset_severity_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```python
def reset_severity_id() -> None
```

##### `reset_status_id` <a name="reset_status_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId"></a>

```python
def reset_status_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput">severity_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput">status_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId">severity_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId">status_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `severity_id_input`<sup>Optional</sup> <a name="severity_id_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```python
severity_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_id_input`<sup>Optional</sup> <a name="status_id_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```python
status_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `severity_id`<sup>Required</sup> <a name="severity_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId"></a>

```python
severity_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_id`<sup>Required</sup> <a name="status_id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId"></a>

```python
status_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionList <a name="SecurityhubAutomationRuleV2ActionList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2Action]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>]

---


### SecurityhubAutomationRuleV2ActionOutputReference <a name="SecurityhubAutomationRuleV2ActionOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration">put_external_integration_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate">put_finding_fields_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration">reset_external_integration_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate">reset_finding_fields_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_integration_configuration` <a name="put_external_integration_configuration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration"></a>

```python
def put_external_integration_configuration(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]

---

##### `put_finding_fields_update` <a name="put_finding_fields_update" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate"></a>

```python
def put_finding_fields_update(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionFindingFieldsUpdate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]

---

##### `reset_external_integration_configuration` <a name="reset_external_integration_configuration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration"></a>

```python
def reset_external_integration_configuration() -> None
```

##### `reset_finding_fields_update` <a name="reset_finding_fields_update" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate"></a>

```python
def reset_finding_fields_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration">external_integration_configuration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate">finding_fields_update</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput">external_integration_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput">finding_fields_update_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_integration_configuration`<sup>Required</sup> <a name="external_integration_configuration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration"></a>

```python
external_integration_configuration: SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a>

---

##### `finding_fields_update`<sup>Required</sup> <a name="finding_fields_update" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate"></a>

```python
finding_fields_update: SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a>

---

##### `external_integration_configuration_input`<sup>Optional</sup> <a name="external_integration_configuration_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput"></a>

```python
external_integration_configuration_input: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>]

---

##### `finding_fields_update_input`<sup>Optional</sup> <a name="finding_fields_update_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput"></a>

```python
finding_fields_update_input: IResolvable | typing.List[SecurityhubAutomationRuleV2ActionFindingFieldsUpdate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2Action
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>

---


### SecurityhubAutomationRuleV2CriteriaList <a name="SecurityhubAutomationRuleV2CriteriaList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2Criteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>]

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput">ocsf_finding_criteria_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson">ocsf_finding_criteria_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocsf_finding_criteria_json_input`<sup>Optional</sup> <a name="ocsf_finding_criteria_json_input" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput"></a>

```python
ocsf_finding_criteria_json_input: str
```

- *Type:* str

---

##### `ocsf_finding_criteria_json`<sup>Required</sup> <a name="ocsf_finding_criteria_json" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson"></a>

```python
ocsf_finding_criteria_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2Criteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



