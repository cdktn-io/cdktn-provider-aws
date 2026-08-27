# `pinpointsmsvoicev2Keyword` Submodule <a name="`pinpointsmsvoicev2Keyword` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Keyword <a name="Pinpointsmsvoicev2Keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword aws_pinpointsmsvoicev2_keyword}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keyword: str,
  keyword_message: str,
  origination_identity_arn: str,
  keyword_action: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keyword">keyword</a></code> | <code>str</code> | Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordMessage">keyword_message</a></code> | <code>str</code> | Message to send when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.originationIdentityArn">origination_identity_arn</a></code> | <code>str</code> | ARN of the origination identity (phone number or pool) to attach the keyword to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordAction">keyword_action</a></code> | <code>str</code> | Action to perform when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keyword"></a>

- *Type:* str

Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}

---

##### `keyword_message`<sup>Required</sup> <a name="keyword_message" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordMessage"></a>

- *Type:* str

Message to send when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}

---

##### `origination_identity_arn`<sup>Required</sup> <a name="origination_identity_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.originationIdentityArn"></a>

- *Type:* str

ARN of the origination identity (phone number or pool) to attach the keyword to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}

---

##### `keyword_action`<sup>Optional</sup> <a name="keyword_action" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordAction"></a>

- *Type:* str

Action to perform when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction">reset_keyword_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_keyword_action` <a name="reset_keyword_action" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction"></a>

```python
def reset_keyword_action() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2Keyword to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2Keyword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Keyword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput">keyword_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput">keyword_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput">keyword_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput">origination_identity_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword">keyword</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction">keyword_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage">keyword_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn">origination_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keyword_action_input`<sup>Optional</sup> <a name="keyword_action_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput"></a>

```python
keyword_action_input: str
```

- *Type:* str

---

##### `keyword_input`<sup>Optional</sup> <a name="keyword_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput"></a>

```python
keyword_input: str
```

- *Type:* str

---

##### `keyword_message_input`<sup>Optional</sup> <a name="keyword_message_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput"></a>

```python
keyword_message_input: str
```

- *Type:* str

---

##### `origination_identity_arn_input`<sup>Optional</sup> <a name="origination_identity_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput"></a>

```python
origination_identity_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

---

##### `keyword_action`<sup>Required</sup> <a name="keyword_action" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction"></a>

```python
keyword_action: str
```

- *Type:* str

---

##### `keyword_message`<sup>Required</sup> <a name="keyword_message" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage"></a>

```python
keyword_message: str
```

- *Type:* str

---

##### `origination_identity_arn`<sup>Required</sup> <a name="origination_identity_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn"></a>

```python
origination_identity_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2KeywordConfig <a name="Pinpointsmsvoicev2KeywordConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_keyword

pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keyword: str,
  keyword_message: str,
  origination_identity_arn: str,
  keyword_action: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword">keyword</a></code> | <code>str</code> | Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage">keyword_message</a></code> | <code>str</code> | Message to send when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn">origination_identity_arn</a></code> | <code>str</code> | ARN of the origination identity (phone number or pool) to attach the keyword to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction">keyword_action</a></code> | <code>str</code> | Action to perform when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}

---

##### `keyword_message`<sup>Required</sup> <a name="keyword_message" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage"></a>

```python
keyword_message: str
```

- *Type:* str

Message to send when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}

---

##### `origination_identity_arn`<sup>Required</sup> <a name="origination_identity_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn"></a>

```python
origination_identity_arn: str
```

- *Type:* str

ARN of the origination identity (phone number or pool) to attach the keyword to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}

---

##### `keyword_action`<sup>Optional</sup> <a name="keyword_action" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction"></a>

```python
keyword_action: str
```

- *Type:* str

Action to perform when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}

---



