# `ephemeralAwsSsmParameter` Submodule <a name="`ephemeralAwsSsmParameter` Submodule" id="@cdktn/provider-aws.ephemeralAwsSsmParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSsmParameter <a name="EphemeralAwsSsmParameter" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter aws_ssm_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ssm_parameter

ephemeralAwsSsmParameter.EphemeralAwsSsmParameter(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  arn: str,
  region: str = None,
  with_decryption: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.withDecryption">with_decryption</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#region EphemeralAwsSsmParameter#region}

---

##### `with_decryption`<sup>Optional</sup> <a name="with_decryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.withDecryption"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetWithDecryption">reset_with_decryption</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_with_decryption` <a name="reset_with_decryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetWithDecryption"></a>

```python
def reset_with_decryption() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ssm_parameter

ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ssm_parameter

ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ssm_parameter

ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryptionInput">with_decryption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryption">with_decryption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `with_decryption_input`<sup>Optional</sup> <a name="with_decryption_input" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryptionInput"></a>

```python
with_decryption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `with_decryption`<sup>Required</sup> <a name="with_decryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryption"></a>

```python
with_decryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSsmParameterConfig <a name="EphemeralAwsSsmParameterConfig" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_ssm_parameter

ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  arn: str,
  region: str = None,
  with_decryption: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.withDecryption">with_decryption</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#region EphemeralAwsSsmParameter#region}

---

##### `with_decryption`<sup>Optional</sup> <a name="with_decryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.withDecryption"></a>

```python
with_decryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}.

---



