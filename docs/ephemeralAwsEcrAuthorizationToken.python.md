# `ephemeralAwsEcrAuthorizationToken` Submodule <a name="`ephemeralAwsEcrAuthorizationToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsEcrAuthorizationToken <a name="EphemeralAwsEcrAuthorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/ecr_authorization_token aws_ecr_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ecr_authorization_token

ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/ecr_authorization_token#region EphemeralAwsEcrAuthorizationToken#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ecr_authorization_token

ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ecr_authorization_token

ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ecr_authorization_token

ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.authorizationToken">authorization_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.proxyEndpoint">proxy_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `authorization_token`<sup>Required</sup> <a name="authorization_token" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.authorizationToken"></a>

```python
authorization_token: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `proxy_endpoint`<sup>Required</sup> <a name="proxy_endpoint" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.proxyEndpoint"></a>

```python
proxy_endpoint: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsEcrAuthorizationTokenConfig <a name="EphemeralAwsEcrAuthorizationTokenConfig" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ecr_authorization_token

ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/ecr_authorization_token#region EphemeralAwsEcrAuthorizationToken#region}

---



