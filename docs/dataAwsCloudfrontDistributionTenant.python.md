# `dataAwsCloudfrontDistributionTenant` Submodule <a name="`dataAwsCloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontDistributionTenant <a name="DataAwsCloudfrontDistributionTenant" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str = None,
  domain: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsCloudfrontDistributionTenant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsCloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId">connection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId">distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains">domains</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest">managed_certificate_request</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connection_group_id`<sup>Required</sup> <a name="connection_group_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId"></a>

```python
connection_group_id: str
```

- *Type:* str

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations"></a>

```python
customizations: DataAwsCloudfrontDistributionTenantCustomizationsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a>

---

##### `distribution_id`<sup>Required</sup> <a name="distribution_id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId"></a>

```python
distribution_id: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains"></a>

```python
domains: DataAwsCloudfrontDistributionTenantDomainsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `managed_certificate_request`<sup>Required</sup> <a name="managed_certificate_request" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```python
managed_certificate_request: DataAwsCloudfrontDistributionTenantManagedCertificateRequestList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters"></a>

```python
parameters: DataAwsCloudfrontDistributionTenantParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontDistributionTenantConfig <a name="DataAwsCloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str = None,
  domain: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}.

---

### DataAwsCloudfrontDistributionTenantCustomizations <a name="DataAwsCloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations()
```


### DataAwsCloudfrontDistributionTenantCustomizationsCertificate <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate()
```


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction()
```


### DataAwsCloudfrontDistributionTenantCustomizationsWebAcl <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl()
```


### DataAwsCloudfrontDistributionTenantDomains <a name="DataAwsCloudfrontDistributionTenantDomains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains()
```


### DataAwsCloudfrontDistributionTenantManagedCertificateRequest <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest()
```


### DataAwsCloudfrontDistributionTenantParameters <a name="DataAwsCloudfrontDistributionTenantParameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontDistributionTenantCustomizationsCertificateList <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantCustomizationsCertificate
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">restriction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_type`<sup>Required</sup> <a name="restriction_type" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```python
restriction_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsList <a name="DataAwsCloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantCustomizationsOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">geo_restriction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">web_acl</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```python
certificate: DataAwsCloudfrontDistributionTenantCustomizationsCertificateList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `geo_restriction`<sup>Required</sup> <a name="geo_restriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```python
geo_restriction: DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `web_acl`<sup>Required</sup> <a name="web_acl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```python
web_acl: DataAwsCloudfrontDistributionTenantCustomizationsWebAclList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantCustomizations
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclList <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantCustomizationsWebAcl
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### DataAwsCloudfrontDistributionTenantDomainsList <a name="DataAwsCloudfrontDistributionTenantDomainsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantDomainsOutputReference <a name="DataAwsCloudfrontDistributionTenantDomainsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantDomains
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a>

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestList <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primary_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validation_token_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference`<sup>Required</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

---

##### `primary_domain_name`<sup>Required</sup> <a name="primary_domain_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```python
primary_domain_name: str
```

- *Type:* str

---

##### `validation_token_host`<sup>Required</sup> <a name="validation_token_host" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```python
validation_token_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantManagedCertificateRequest
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a>

---


### DataAwsCloudfrontDistributionTenantParametersList <a name="DataAwsCloudfrontDistributionTenantParametersList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontDistributionTenantParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontDistributionTenantParametersOutputReference <a name="DataAwsCloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_cloudfront_distribution_tenant

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontDistributionTenantParameters
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a>

---



