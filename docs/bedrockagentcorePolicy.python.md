# `bedrockagentcorePolicy` Submodule <a name="`bedrockagentcorePolicy` Submodule" id="@cdktn/provider-aws.bedrockagentcorePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePolicy <a name="BedrockagentcorePolicy" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy aws_bedrockagentcore_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicy(
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
  policy_engine_id: str,
  definition: IResolvable | typing.List[BedrockagentcorePolicyDefinition] = None,
  description: str = None,
  region: str = None,
  timeouts: BedrockagentcorePolicyTimeouts = None,
  validation_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.policyEngineId">policy_engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.definition">definition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]</code> | definition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.validationMode">validation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}.

---

##### `policy_engine_id`<sup>Required</sup> <a name="policy_engine_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.policyEngineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.definition"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#definition BedrockagentcorePolicy#definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#region BedrockagentcorePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#timeouts BedrockagentcorePolicy#timeouts}

---

##### `validation_mode`<sup>Optional</sup> <a name="validation_mode" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.validationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode">reset_validation_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition` <a name="put_definition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition"></a>

```python
def put_definition(
  value: IResolvable | typing.List[BedrockagentcorePolicyDefinition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#create BedrockagentcorePolicy#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#delete BedrockagentcorePolicy#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#update BedrockagentcorePolicy#update}

---

##### `reset_definition` <a name="reset_definition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validation_mode` <a name="reset_validation_mode" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode"></a>

```python
def reset_validation_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcorePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcorePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList">BedrockagentcorePolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference">BedrockagentcorePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput">definition_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput">policy_engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput">validation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId">policy_engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode">validation_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition"></a>

```python
definition: BedrockagentcorePolicyDefinitionList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList">BedrockagentcorePolicyDefinitionList</a>

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.timeouts"></a>

```python
timeouts: BedrockagentcorePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference">BedrockagentcorePolicyTimeoutsOutputReference</a>

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput"></a>

```python
definition_input: IResolvable | typing.List[BedrockagentcorePolicyDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_engine_id_input`<sup>Optional</sup> <a name="policy_engine_id_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput"></a>

```python
policy_engine_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcorePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a>

---

##### `validation_mode_input`<sup>Optional</sup> <a name="validation_mode_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput"></a>

```python
validation_mode_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_engine_id`<sup>Required</sup> <a name="policy_engine_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId"></a>

```python
policy_engine_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `validation_mode`<sup>Required</sup> <a name="validation_mode" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode"></a>

```python
validation_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePolicyConfig <a name="BedrockagentcorePolicyConfig" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  policy_engine_id: str,
  definition: IResolvable | typing.List[BedrockagentcorePolicyDefinition] = None,
  description: str = None,
  region: str = None,
  timeouts: BedrockagentcorePolicyTimeouts = None,
  validation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId">policy_engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition">definition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]</code> | definition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode">validation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}.

---

##### `policy_engine_id`<sup>Required</sup> <a name="policy_engine_id" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId"></a>

```python
policy_engine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition"></a>

```python
definition: IResolvable | typing.List[BedrockagentcorePolicyDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#definition BedrockagentcorePolicy#definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#region BedrockagentcorePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcorePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#timeouts BedrockagentcorePolicy#timeouts}

---

##### `validation_mode`<sup>Optional</sup> <a name="validation_mode" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode"></a>

```python
validation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}.

---

### BedrockagentcorePolicyDefinition <a name="BedrockagentcorePolicyDefinition" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinition(
  cedar: IResolvable | typing.List[BedrockagentcorePolicyDefinitionCedar] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar">cedar</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]</code> | cedar block. |

---

##### `cedar`<sup>Optional</sup> <a name="cedar" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar"></a>

```python
cedar: IResolvable | typing.List[BedrockagentcorePolicyDefinitionCedar]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]

cedar block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#cedar BedrockagentcorePolicy#cedar}

---

### BedrockagentcorePolicyDefinitionCedar <a name="BedrockagentcorePolicyDefinitionCedar" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar(
  statement: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement">statement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}. |

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement"></a>

```python
statement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}.

---

### BedrockagentcorePolicyTimeouts <a name="BedrockagentcorePolicyTimeouts" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#create BedrockagentcorePolicy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#delete BedrockagentcorePolicy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_policy#update BedrockagentcorePolicy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePolicyDefinitionCedarList <a name="BedrockagentcorePolicyDefinitionCedarList" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcorePolicyDefinitionCedarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcorePolicyDefinitionCedar]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]

---


### BedrockagentcorePolicyDefinitionCedarOutputReference <a name="BedrockagentcorePolicyDefinitionCedarOutputReference" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput">statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement">statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statement_input`<sup>Optional</sup> <a name="statement_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput"></a>

```python
statement_input: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement"></a>

```python
statement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePolicyDefinitionCedar
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---


### BedrockagentcorePolicyDefinitionList <a name="BedrockagentcorePolicyDefinitionList" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcorePolicyDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcorePolicyDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>]

---


### BedrockagentcorePolicyDefinitionOutputReference <a name="BedrockagentcorePolicyDefinitionOutputReference" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar">put_cedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar">reset_cedar</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cedar` <a name="put_cedar" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar"></a>

```python
def put_cedar(
  value: IResolvable | typing.List[BedrockagentcorePolicyDefinitionCedar]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]

---

##### `reset_cedar` <a name="reset_cedar" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar"></a>

```python
def reset_cedar() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar">cedar</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList">BedrockagentcorePolicyDefinitionCedarList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput">cedar_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cedar`<sup>Required</sup> <a name="cedar" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar"></a>

```python
cedar: BedrockagentcorePolicyDefinitionCedarList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarList">BedrockagentcorePolicyDefinitionCedarList</a>

---

##### `cedar_input`<sup>Optional</sup> <a name="cedar_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput"></a>

```python
cedar_input: IResolvable | typing.List[BedrockagentcorePolicyDefinitionCedar]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePolicyDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---


### BedrockagentcorePolicyTimeoutsOutputReference <a name="BedrockagentcorePolicyTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_policy

bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcorePolicy.BedrockagentcorePolicyTimeouts">BedrockagentcorePolicyTimeouts</a>

---



