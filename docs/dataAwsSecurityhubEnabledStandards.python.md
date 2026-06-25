# `dataAwsSecurityhubEnabledStandards` Submodule <a name="`dataAwsSecurityhubEnabledStandards` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubEnabledStandards <a name="DataAwsSecurityhubEnabledStandards" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards aws_securityhub_enabled_standards}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  standards_subscription_arns: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.standardsSubscriptionArns">standards_subscription_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}

---

##### `standards_subscription_arns`<sup>Optional</sup> <a name="standards_subscription_arns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.standardsSubscriptionArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns">reset_standards_subscription_arns</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_standards_subscription_arns` <a name="reset_standards_subscription_arns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns"></a>

```python
def reset_standards_subscription_arns() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSecurityhubEnabledStandards to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSecurityhubEnabledStandards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubEnabledStandards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions">standards_subscriptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput">standards_subscription_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns">standards_subscription_arns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `standards_subscriptions`<sup>Required</sup> <a name="standards_subscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions"></a>

```python
standards_subscriptions: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `standards_subscription_arns_input`<sup>Optional</sup> <a name="standards_subscription_arns_input" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput"></a>

```python
standards_subscription_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `standards_subscription_arns`<sup>Required</sup> <a name="standards_subscription_arns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns"></a>

```python
standards_subscription_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubEnabledStandardsConfig <a name="DataAwsSecurityhubEnabledStandardsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  standards_subscription_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns">standards_subscription_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}

---

##### `standards_subscription_arns`<sup>Optional</sup> <a name="standards_subscription_arns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns"></a>

```python
standards_subscription_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}.

---

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptions <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions()
```


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn">standards_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable">standards_controls_updatable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs">standards_inputs</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus">standards_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason">standards_status_reason</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn">standards_subscription_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standards_arn`<sup>Required</sup> <a name="standards_arn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn"></a>

```python
standards_arn: str
```

- *Type:* str

---

##### `standards_controls_updatable`<sup>Required</sup> <a name="standards_controls_updatable" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable"></a>

```python
standards_controls_updatable: str
```

- *Type:* str

---

##### `standards_inputs`<sup>Required</sup> <a name="standards_inputs" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs"></a>

```python
standards_inputs: StringMap
```

- *Type:* cdktn.StringMap

---

##### `standards_status`<sup>Required</sup> <a name="standards_status" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus"></a>

```python
standards_status: str
```

- *Type:* str

---

##### `standards_status_reason`<sup>Required</sup> <a name="standards_status_reason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason"></a>

```python
standards_status_reason: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a>

---

##### `standards_subscription_arn`<sup>Required</sup> <a name="standards_subscription_arn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn"></a>

```python
standards_subscription_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSecurityhubEnabledStandardsStandardsSubscriptions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a>

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_enabled_standards

dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode">status_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_reason_code`<sup>Required</sup> <a name="status_reason_code" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode"></a>

```python
status_reason_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a>

---



