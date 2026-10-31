# `dataAwsSagemakerHubContent` Submodule <a name="`dataAwsSagemakerHubContent` Submodule" id="@cdktn/provider-aws.dataAwsSagemakerHubContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerHubContent <a name="DataAwsSagemakerHubContent" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub_content_name: str,
  hub_content_type: str,
  hub_name: str,
  hub_content_version: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentName">hub_content_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentType">hub_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubName">hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentVersion">hub_content_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `hub_content_type`<sup>Required</sup> <a name="hub_content_type" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `hub_content_version`<sup>Optional</sup> <a name="hub_content_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion">reset_hub_content_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_hub_content_version` <a name="reset_hub_content_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion"></a>

```python
def reset_hub_content_version() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSagemakerHubContent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSagemakerHubContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion">document_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn">hub_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency">hub_content_dependency</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription">hub_content_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName">hub_content_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument">hub_content_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown">hub_content_markdown</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords">hub_content_search_keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus">hub_content_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion">reference_min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn">sagemaker_public_hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus">support_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn">versioned_hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput">hub_content_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput">hub_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput">hub_content_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput">hub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName">hub_content_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType">hub_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion">hub_content_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName">hub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `document_schema_version`<sup>Required</sup> <a name="document_schema_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion"></a>

```python
document_schema_version: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `hub_arn`<sup>Required</sup> <a name="hub_arn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn"></a>

```python
hub_arn: str
```

- *Type:* str

---

##### `hub_content_arn`<sup>Required</sup> <a name="hub_content_arn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

---

##### `hub_content_dependency`<sup>Required</sup> <a name="hub_content_dependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency"></a>

```python
hub_content_dependency: DataAwsSagemakerHubContentHubContentDependencyList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a>

---

##### `hub_content_description`<sup>Required</sup> <a name="hub_content_description" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription"></a>

```python
hub_content_description: str
```

- *Type:* str

---

##### `hub_content_display_name`<sup>Required</sup> <a name="hub_content_display_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName"></a>

```python
hub_content_display_name: str
```

- *Type:* str

---

##### `hub_content_document`<sup>Required</sup> <a name="hub_content_document" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument"></a>

```python
hub_content_document: str
```

- *Type:* str

---

##### `hub_content_markdown`<sup>Required</sup> <a name="hub_content_markdown" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown"></a>

```python
hub_content_markdown: str
```

- *Type:* str

---

##### `hub_content_search_keywords`<sup>Required</sup> <a name="hub_content_search_keywords" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords"></a>

```python
hub_content_search_keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hub_content_status`<sup>Required</sup> <a name="hub_content_status" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus"></a>

```python
hub_content_status: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `reference_min_version`<sup>Required</sup> <a name="reference_min_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion"></a>

```python
reference_min_version: str
```

- *Type:* str

---

##### `sagemaker_public_hub_content_arn`<sup>Required</sup> <a name="sagemaker_public_hub_content_arn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn"></a>

```python
sagemaker_public_hub_content_arn: str
```

- *Type:* str

---

##### `support_status`<sup>Required</sup> <a name="support_status" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus"></a>

```python
support_status: str
```

- *Type:* str

---

##### `versioned_hub_content_arn`<sup>Required</sup> <a name="versioned_hub_content_arn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn"></a>

```python
versioned_hub_content_arn: str
```

- *Type:* str

---

##### `hub_content_name_input`<sup>Optional</sup> <a name="hub_content_name_input" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput"></a>

```python
hub_content_name_input: str
```

- *Type:* str

---

##### `hub_content_type_input`<sup>Optional</sup> <a name="hub_content_type_input" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput"></a>

```python
hub_content_type_input: str
```

- *Type:* str

---

##### `hub_content_version_input`<sup>Optional</sup> <a name="hub_content_version_input" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput"></a>

```python
hub_content_version_input: str
```

- *Type:* str

---

##### `hub_name_input`<sup>Optional</sup> <a name="hub_name_input" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput"></a>

```python
hub_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName"></a>

```python
hub_content_name: str
```

- *Type:* str

---

##### `hub_content_type`<sup>Required</sup> <a name="hub_content_type" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType"></a>

```python
hub_content_type: str
```

- *Type:* str

---

##### `hub_content_version`<sup>Required</sup> <a name="hub_content_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion"></a>

```python
hub_content_version: str
```

- *Type:* str

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName"></a>

```python
hub_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerHubContentConfig <a name="DataAwsSagemakerHubContentConfig" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub_content_name: str,
  hub_content_type: str,
  hub_name: str,
  hub_content_version: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName">hub_content_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType">hub_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName">hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion">hub_content_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName"></a>

```python
hub_content_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `hub_content_type`<sup>Required</sup> <a name="hub_content_type" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType"></a>

```python
hub_content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName"></a>

```python
hub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `hub_content_version`<sup>Optional</sup> <a name="hub_content_version" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion"></a>

```python
hub_content_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

### DataAwsSagemakerHubContentHubContentDependency <a name="DataAwsSagemakerHubContentHubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSagemakerHubContentHubContentDependencyList <a name="DataAwsSagemakerHubContentHubContentDependencyList" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSagemakerHubContentHubContentDependencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSagemakerHubContentHubContentDependencyOutputReference <a name="DataAwsSagemakerHubContentHubContentDependencyOutputReference" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_sagemaker_hub_content

dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath">dependency_copy_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath">dependency_origin_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_copy_path`<sup>Required</sup> <a name="dependency_copy_path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath"></a>

```python
dependency_copy_path: str
```

- *Type:* str

---

##### `dependency_origin_path`<sup>Required</sup> <a name="dependency_origin_path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath"></a>

```python
dependency_origin_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSagemakerHubContentHubContentDependency
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a>

---



