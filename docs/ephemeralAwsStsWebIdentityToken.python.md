# `ephemeralAwsStsWebIdentityToken` Submodule <a name="`ephemeralAwsStsWebIdentityToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsStsWebIdentityToken <a name="EphemeralAwsStsWebIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_sts_web_identity_token

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  audience: typing.List[str],
  signing_algorithm: str,
  duration_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.audience">audience</a></code> | <code>typing.List[str]</code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.audience"></a>

- *Type:* typing.List[str]

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.signingAlgorithm"></a>

- *Type:* str

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_sts_web_identity_token

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_sts_web_identity_token

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_sts_web_identity_token

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken">web_identity_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput">audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience">audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `web_identity_token`<sup>Required</sup> <a name="web_identity_token" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken"></a>

```python
web_identity_token: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput"></a>

```python
audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsStsWebIdentityTokenConfig <a name="EphemeralAwsStsWebIdentityTokenConfig" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_sts_web_identity_token

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  audience: typing.List[str],
  signing_algorithm: str,
  duration_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience">audience</a></code> | <code>typing.List[str]</code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---



