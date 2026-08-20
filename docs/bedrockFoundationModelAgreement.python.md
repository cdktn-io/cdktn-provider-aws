# `bedrockFoundationModelAgreement` Submodule <a name="`bedrockFoundationModelAgreement` Submodule" id="@cdktn/provider-aws.bedrockFoundationModelAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockFoundationModelAgreement <a name="BedrockFoundationModelAgreement" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement aws_bedrock_foundation_model_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_id: str,
  offer_token: str,
  region: str = None,
  timeouts: BedrockFoundationModelAgreementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#model_id BedrockFoundationModelAgreement#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.offerToken">offer_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#offer_token BedrockFoundationModelAgreement#offer_token}. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#model_id BedrockFoundationModelAgreement#model_id}.

---

##### `offer_token`<sup>Required</sup> <a name="offer_token" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.offerToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#offer_token BedrockFoundationModelAgreement#offer_token}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#region BedrockFoundationModelAgreement#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#timeouts BedrockFoundationModelAgreement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#create BedrockFoundationModelAgreement#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#delete BedrockFoundationModelAgreement#delete}

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockFoundationModelAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isConstruct"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockFoundationModelAgreement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockFoundationModelAgreement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockFoundationModelAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockFoundationModelAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference">BedrockFoundationModelAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.offerTokenInput">offer_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.offerToken">offer_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.timeouts"></a>

```python
timeouts: BedrockFoundationModelAgreementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference">BedrockFoundationModelAgreementTimeoutsOutputReference</a>

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `offer_token_input`<sup>Optional</sup> <a name="offer_token_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.offerTokenInput"></a>

```python
offer_token_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockFoundationModelAgreementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a>

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `offer_token`<sup>Required</sup> <a name="offer_token" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.offerToken"></a>

```python
offer_token: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockFoundationModelAgreementConfig <a name="BedrockFoundationModelAgreementConfig" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_id: str,
  offer_token: str,
  region: str = None,
  timeouts: BedrockFoundationModelAgreementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#model_id BedrockFoundationModelAgreement#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.offerToken">offer_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#offer_token BedrockFoundationModelAgreement#offer_token}. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#model_id BedrockFoundationModelAgreement#model_id}.

---

##### `offer_token`<sup>Required</sup> <a name="offer_token" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.offerToken"></a>

```python
offer_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#offer_token BedrockFoundationModelAgreement#offer_token}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#region BedrockFoundationModelAgreement#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementConfig.property.timeouts"></a>

```python
timeouts: BedrockFoundationModelAgreementTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#timeouts BedrockFoundationModelAgreement#timeouts}

---

### BedrockFoundationModelAgreementTimeouts <a name="BedrockFoundationModelAgreementTimeouts" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#create BedrockFoundationModelAgreement#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_foundation_model_agreement#delete BedrockFoundationModelAgreement#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockFoundationModelAgreementTimeoutsOutputReference <a name="BedrockFoundationModelAgreementTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_foundation_model_agreement

bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockFoundationModelAgreementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockFoundationModelAgreement.BedrockFoundationModelAgreementTimeouts">BedrockFoundationModelAgreementTimeouts</a>

---



