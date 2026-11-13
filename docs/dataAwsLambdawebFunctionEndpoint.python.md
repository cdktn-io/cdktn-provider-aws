# `dataAwsLambdawebFunctionEndpoint` Submodule <a name="`dataAwsLambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdawebFunctionEndpoint <a name="DataAwsLambdawebFunctionEndpoint" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  function_name: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#region DataAwsLambdawebFunctionEndpoint#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsLambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsLambdawebFunctionEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsLambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode">auto_deployment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames">regional_domain_names</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights">revision_weights</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auto_deployment_mode`<sup>Required</sup> <a name="auto_deployment_mode" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```python
auto_deployment_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `regional_domain_names`<sup>Required</sup> <a name="regional_domain_names" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```python
regional_domain_names: StringMap
```

- *Type:* cdktn.StringMap

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revision_weights`<sup>Required</sup> <a name="revision_weights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.revisionWeights"></a>

```python
revision_weights: DataAwsLambdawebFunctionEndpointRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList">DataAwsLambdawebFunctionEndpointRevisionWeightsList</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.scalingConfig"></a>

```python
scaling_config: DataAwsLambdawebFunctionEndpointScalingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList">DataAwsLambdawebFunctionEndpointScalingConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `throttle_config`<sup>Required</sup> <a name="throttle_config" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.throttleConfig"></a>

```python
throttle_config: DataAwsLambdawebFunctionEndpointThrottleConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList">DataAwsLambdawebFunctionEndpointThrottleConfigList</a>

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdawebFunctionEndpointConfig <a name="DataAwsLambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  function_name: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#endpoint_name DataAwsLambdawebFunctionEndpoint#endpoint_name}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#function_name DataAwsLambdawebFunctionEndpoint#function_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/data-sources/lambdaweb_function_endpoint#region DataAwsLambdawebFunctionEndpoint#region}

---

### DataAwsLambdawebFunctionEndpointRevisionWeights <a name="DataAwsLambdawebFunctionEndpointRevisionWeights" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights()
```


### DataAwsLambdawebFunctionEndpointScalingConfig <a name="DataAwsLambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig()
```


### DataAwsLambdawebFunctionEndpointThrottleConfig <a name="DataAwsLambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdawebFunctionEndpointRevisionWeightsList <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference <a name="DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdawebFunctionEndpointRevisionWeights
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointRevisionWeights">DataAwsLambdawebFunctionEndpointRevisionWeights</a>

---


### DataAwsLambdawebFunctionEndpointScalingConfigList <a name="DataAwsLambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdawebFunctionEndpointScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdawebFunctionEndpointScalingConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_environments`<sup>Required</sup> <a name="max_environments" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdawebFunctionEndpointScalingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointScalingConfig">DataAwsLambdawebFunctionEndpointScalingConfig</a>

---


### DataAwsLambdawebFunctionEndpointThrottleConfigList <a name="DataAwsLambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference <a name="DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_lambdaweb_function_endpoint

dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdawebFunctionEndpointThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdawebFunctionEndpoint.DataAwsLambdawebFunctionEndpointThrottleConfig">DataAwsLambdawebFunctionEndpointThrottleConfig</a>

---



