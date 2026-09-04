# `dataAwsResiliencehubv2Policy` Submodule <a name="`dataAwsResiliencehubv2Policy` Submodule" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResiliencehubv2Policy <a name="DataAwsResiliencehubv2Policy" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy aws_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#region DataAwsResiliencehubv2Policy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsResiliencehubv2Policy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsResiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo">availability_slo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery">data_recovery</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz">multi_az</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion">multi_region</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_slo`<sup>Required</sup> <a name="availability_slo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo"></a>

```python
availability_slo: DataAwsResiliencehubv2PolicyAvailabilitySloList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a>

---

##### `data_recovery`<sup>Required</sup> <a name="data_recovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery"></a>

```python
data_recovery: DataAwsResiliencehubv2PolicyDataRecoveryList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz"></a>

```python
multi_az: DataAwsResiliencehubv2PolicyMultiAzList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a>

---

##### `multi_region`<sup>Required</sup> <a name="multi_region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion"></a>

```python
multi_region: DataAwsResiliencehubv2PolicyMultiRegionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySlo <a name="DataAwsResiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo()
```


### DataAwsResiliencehubv2PolicyConfig <a name="DataAwsResiliencehubv2PolicyConfig" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#region DataAwsResiliencehubv2Policy#region}

---

### DataAwsResiliencehubv2PolicyDataRecovery <a name="DataAwsResiliencehubv2PolicyDataRecovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery()
```


### DataAwsResiliencehubv2PolicyMultiAz <a name="DataAwsResiliencehubv2PolicyMultiAz" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz()
```


### DataAwsResiliencehubv2PolicyMultiRegion <a name="DataAwsResiliencehubv2PolicyMultiRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySloList <a name="DataAwsResiliencehubv2PolicyAvailabilitySloList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference <a name="DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResiliencehubv2PolicyAvailabilitySlo
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a>

---


### DataAwsResiliencehubv2PolicyDataRecoveryList <a name="DataAwsResiliencehubv2PolicyDataRecoveryList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResiliencehubv2PolicyDataRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResiliencehubv2PolicyDataRecoveryOutputReference <a name="DataAwsResiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">time_between_backups_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_between_backups_in_minutes`<sup>Required</sup> <a name="time_between_backups_in_minutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```python
time_between_backups_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResiliencehubv2PolicyDataRecovery
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a>

---


### DataAwsResiliencehubv2PolicyMultiAzList <a name="DataAwsResiliencehubv2PolicyMultiAzList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResiliencehubv2PolicyMultiAzOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResiliencehubv2PolicyMultiAzOutputReference <a name="DataAwsResiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

---

##### `rpo_in_minutes`<sup>Required</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes`<sup>Required</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResiliencehubv2PolicyMultiAz
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a>

---


### DataAwsResiliencehubv2PolicyMultiRegionList <a name="DataAwsResiliencehubv2PolicyMultiRegionList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResiliencehubv2PolicyMultiRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResiliencehubv2PolicyMultiRegionOutputReference <a name="DataAwsResiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resiliencehubv2_policy

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

---

##### `rpo_in_minutes`<sup>Required</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes`<sup>Required</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResiliencehubv2PolicyMultiRegion
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a>

---



