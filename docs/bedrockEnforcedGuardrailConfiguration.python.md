# `bedrockEnforcedGuardrailConfiguration` Submodule <a name="`bedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockEnforcedGuardrailConfiguration <a name="BedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration aws_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guardrail_arn: str,
  guardrail_version: str,
  model_enforcement: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement] = None,
  region: str = None,
  selective_content_guarding: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailArn">guardrail_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement">model_enforcement</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]</code> | model_enforcement block. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding">selective_content_guarding</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]</code> | selective_content_guarding block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}.

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}.

---

##### `model_enforcement`<sup>Optional</sup> <a name="model_enforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]

model_enforcement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}

---

##### `selective_content_guarding`<sup>Optional</sup> <a name="selective_content_guarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]

selective_content_guarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement">put_model_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding">put_selective_content_guarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement">reset_model_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding">reset_selective_content_guarding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_model_enforcement` <a name="put_model_enforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement"></a>

```python
def put_model_enforcement(
  value: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]

---

##### `put_selective_content_guarding` <a name="put_selective_content_guarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding"></a>

```python
def put_selective_content_guarding(
  value: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]

---

##### `reset_model_enforcement` <a name="reset_model_enforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement"></a>

```python
def reset_model_enforcement() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_selective_content_guarding` <a name="reset_selective_content_guarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding"></a>

```python
def reset_selective_content_guarding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement">model_enforcement</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selective_content_guarding</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput">guardrail_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput">guardrail_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput">model_enforcement_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput">selective_content_guarding_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `model_enforcement`<sup>Required</sup> <a name="model_enforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```python
model_enforcement: BedrockEnforcedGuardrailConfigurationModelEnforcementList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `selective_content_guarding`<sup>Required</sup> <a name="selective_content_guarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```python
selective_content_guarding: BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a>

---

##### `guardrail_arn_input`<sup>Optional</sup> <a name="guardrail_arn_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput"></a>

```python
guardrail_arn_input: str
```

- *Type:* str

---

##### `guardrail_version_input`<sup>Optional</sup> <a name="guardrail_version_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput"></a>

```python
guardrail_version_input: str
```

- *Type:* str

---

##### `model_enforcement_input`<sup>Optional</sup> <a name="model_enforcement_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput"></a>

```python
model_enforcement_input: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `selective_content_guarding_input`<sup>Optional</sup> <a name="selective_content_guarding_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput"></a>

```python
selective_content_guarding_input: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```python
guardrail_arn: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockEnforcedGuardrailConfigurationConfig <a name="BedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guardrail_arn: str,
  guardrail_version: str,
  model_enforcement: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement] = None,
  region: str = None,
  selective_content_guarding: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn">guardrail_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement">model_enforcement</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]</code> | model_enforcement block. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding">selective_content_guarding</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]</code> | selective_content_guarding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn"></a>

```python
guardrail_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}.

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}.

---

##### `model_enforcement`<sup>Optional</sup> <a name="model_enforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement"></a>

```python
model_enforcement: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]

model_enforcement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}

---

##### `selective_content_guarding`<sup>Optional</sup> <a name="selective_content_guarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding"></a>

```python
selective_content_guarding: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]

selective_content_guarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

### BedrockEnforcedGuardrailConfigurationModelEnforcement <a name="BedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement(
  excluded_models: typing.List[str],
  included_models: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels">excluded_models</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels">included_models</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}. |

---

##### `excluded_models`<sup>Required</sup> <a name="excluded_models" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels"></a>

```python
excluded_models: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}.

---

##### `included_models`<sup>Required</sup> <a name="included_models" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels"></a>

```python
included_models: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}.

---

### BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding(
  messages: str = None,
  system_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages">messages</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute">system_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages"></a>

```python
messages: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}.

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockEnforcedGuardrailConfigurationModelEnforcementList <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationModelEnforcement]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>]

---


### BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput">excluded_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput">included_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excluded_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">included_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_models_input`<sup>Optional</sup> <a name="excluded_models_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput"></a>

```python
excluded_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_models_input`<sup>Optional</sup> <a name="included_models_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput"></a>

```python
included_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_models`<sup>Required</sup> <a name="excluded_models" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```python
excluded_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_models`<sup>Required</sup> <a name="included_models" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```python
included_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>]

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_enforced_guardrail_configuration

bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_messages` <a name="reset_messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput">messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput"></a>

```python
messages_input: str
```

- *Type:* str

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```python
messages: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



