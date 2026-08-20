# `ephemeralAwsKmsSecrets` Submodule <a name="`ephemeralAwsKmsSecrets` Submodule" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsKmsSecrets <a name="EphemeralAwsKmsSecrets" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  region: str = None,
  secret: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.secret">secret</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]</code> | secret block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.secret"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret"></a>

```python
def put_secret(
  value: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret"></a>

```python
def reset_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext">plaintext</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext"></a>

```python
plaintext: StringMap
```

- *Type:* cdktn.StringMap

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret"></a>

```python
secret: EphemeralAwsKmsSecretsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput"></a>

```python
secret_input: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsKmsSecretsConfig <a name="EphemeralAwsKmsSecretsConfig" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  region: str = None,
  secret: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret">secret</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]</code> | secret block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret"></a>

```python
secret: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

### EphemeralAwsKmsSecretsSecret <a name="EphemeralAwsKmsSecretsSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret(
  name: str,
  payload: str,
  context: typing.Mapping[str] = None,
  encryption_algorithm: str = None,
  grant_tokens: typing.List[str] = None,
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context">context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}.

---

##### `grant_tokens`<sup>Optional</sup> <a name="grant_tokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAwsKmsSecretsSecretList <a name="EphemeralAwsKmsSecretsSecretList" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EphemeralAwsKmsSecretsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EphemeralAwsKmsSecretsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>]

---


### EphemeralAwsKmsSecretsSecretOutputReference <a name="EphemeralAwsKmsSecretsSecretOutputReference" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_kms_secrets

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens">reset_grant_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_grant_tokens` <a name="reset_grant_tokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```python
def reset_grant_tokens() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput">grant_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `grant_tokens_input`<sup>Optional</sup> <a name="grant_tokens_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```python
grant_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `grant_tokens`<sup>Required</sup> <a name="grant_tokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralAwsKmsSecretsSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>

---



