# `dataAwsLambdamicrovmsImageVersion` Submodule <a name="`dataAwsLambdamicrovmsImageVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdamicrovmsImageVersion <a name="DataAwsLambdamicrovmsImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_identifier: str,
  image_version: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageIdentifier">image_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_identifier`<sup>Required</sup> <a name="image_identifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn">base_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion">base_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn">build_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact">code_artifact</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration">cpu_configuration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput">image_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput">image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier">image_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_os_capabilities`<sup>Required</sup> <a name="additional_os_capabilities" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities"></a>

```python
additional_os_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn"></a>

```python
base_image_arn: str
```

- *Type:* str

---

##### `base_image_version`<sup>Required</sup> <a name="base_image_version" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion"></a>

```python
base_image_version: str
```

- *Type:* str

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn"></a>

```python
build_role_arn: str
```

- *Type:* str

---

##### `code_artifact`<sup>Required</sup> <a name="code_artifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact"></a>

```python
code_artifact: DataAwsLambdamicrovmsImageVersionCodeArtifactList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a>

---

##### `cpu_configuration`<sup>Required</sup> <a name="cpu_configuration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration"></a>

```python
cpu_configuration: DataAwsLambdamicrovmsImageVersionCpuConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks"></a>

```python
hooks: DataAwsLambdamicrovmsImageVersionHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a>

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging"></a>

```python
logging: DataAwsLambdamicrovmsImageVersionLoggingList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources"></a>

```python
resources: DataAwsLambdamicrovmsImageVersionResourcesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `image_identifier_input`<sup>Optional</sup> <a name="image_identifier_input" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput"></a>

```python
image_identifier_input: str
```

- *Type:* str

---

##### `image_version_input`<sup>Optional</sup> <a name="image_version_input" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput"></a>

```python
image_version_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `image_identifier`<sup>Required</sup> <a name="image_identifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier"></a>

```python
image_identifier: str
```

- *Type:* str

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifact <a name="DataAwsLambdamicrovmsImageVersionCodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact()
```


### DataAwsLambdamicrovmsImageVersionConfig <a name="DataAwsLambdamicrovmsImageVersionConfig" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_identifier: str,
  image_version: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier">image_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_identifier`<sup>Required</sup> <a name="image_identifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier"></a>

```python
image_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

### DataAwsLambdamicrovmsImageVersionCpuConfiguration <a name="DataAwsLambdamicrovmsImageVersionCpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration()
```


### DataAwsLambdamicrovmsImageVersionHooks <a name="DataAwsLambdamicrovmsImageVersionHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks()
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks()
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks()
```


### DataAwsLambdamicrovmsImageVersionLogging <a name="DataAwsLambdamicrovmsImageVersionLogging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging()
```


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatch <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch()
```


### DataAwsLambdamicrovmsImageVersionLoggingDisabled <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled()
```


### DataAwsLambdamicrovmsImageVersionResources <a name="DataAwsLambdamicrovmsImageVersionResources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifactList <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionCodeArtifact
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a>

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationList <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionCpuConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a>

---


### DataAwsLambdamicrovmsImageVersionHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resume_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">run_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspend_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume"></a>

```python
resume: str
```

- *Type:* str

---

##### `resume_timeout_in_seconds`<sup>Required</sup> <a name="resume_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```python
resume_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run"></a>

```python
run: str
```

- *Type:* str

---

##### `run_timeout_in_seconds`<sup>Required</sup> <a name="run_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```python
run_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend"></a>

```python
suspend: str
```

- *Type:* str

---

##### `suspend_timeout_in_seconds`<sup>Required</sup> <a name="suspend_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```python
suspend_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate"></a>

```python
terminate: str
```

- *Type:* str

---

##### `terminate_timeout_in_seconds`<sup>Required</sup> <a name="terminate_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```python
terminate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ready_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready"></a>

```python
ready: str
```

- *Type:* str

---

##### `ready_timeout_in_seconds`<sup>Required</sup> <a name="ready_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```python
ready_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `validate_timeout_in_seconds`<sup>Required</sup> <a name="validate_timeout_in_seconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```python
validate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks">microvm_hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks">microvm_image_hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `microvm_hooks`<sup>Required</sup> <a name="microvm_hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks"></a>

```python
microvm_hooks: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a>

---

##### `microvm_image_hooks`<sup>Required</sup> <a name="microvm_image_hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks"></a>

```python
microvm_image_hooks: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionHooks
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream">log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream`<sup>Required</sup> <a name="log_stream" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream"></a>

```python
log_stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionLoggingCloudwatch
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledList <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionLoggingDisabled
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingList <a name="DataAwsLambdamicrovmsImageVersionLoggingList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionLoggingOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch"></a>

```python
cloudwatch: DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled"></a>

```python
disabled: DataAwsLambdamicrovmsImageVersionLoggingDisabledList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionLogging
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a>

---


### DataAwsLambdamicrovmsImageVersionResourcesList <a name="DataAwsLambdamicrovmsImageVersionResourcesList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdamicrovmsImageVersionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdamicrovmsImageVersionResourcesOutputReference <a name="DataAwsLambdamicrovmsImageVersionResourcesOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdamicrovms_image_version

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib">minimum_memory_in_mib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_memory_in_mib`<sup>Required</sup> <a name="minimum_memory_in_mib" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib"></a>

```python
minimum_memory_in_mib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdamicrovmsImageVersionResources
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a>

---



