# `dataAwsAccountaccessEntitlements` Submodule <a name="`dataAwsAccountaccessEntitlements` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessEntitlements <a name="DataAwsAccountaccessEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_arn: str,
  filter: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.applicationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsAccountaccessEntitlements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsAccountaccessEntitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessEntitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements"></a>

```python
entitlements: DataAwsAccountaccessEntitlementsEntitlementsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter"></a>

```python
filter: DataAwsAccountaccessEntitlementsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a>

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessEntitlementsConfig <a name="DataAwsAccountaccessEntitlementsConfig" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_arn: str,
  filter: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}

---

### DataAwsAccountaccessEntitlementsEntitlements <a name="DataAwsAccountaccessEntitlementsEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements()
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlement <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement()
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole()
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal()
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter()
```


### DataAwsAccountaccessEntitlementsFilter <a name="DataAwsAccountaccessEntitlementsFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter(
  principal_role: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRole] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole">principal_role</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]</code> | principal_role block. |

---

##### `principal_role`<sup>Optional</sup> <a name="principal_role" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole"></a>

```python
principal_role: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRole]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal_role DataAwsAccountaccessEntitlements#principal_role}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRole <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole(
  account_id: str = None,
  principal: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal] = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal">principal</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal"></a>

```python
principal: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal DataAwsAccountaccessEntitlements#principal}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}.

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal(
  identity_center: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter">identity_center</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]</code> | identity_center block. |

---

##### `identity_center`<sup>Optional</sup> <a name="identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter"></a>

```python
identity_center: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#identity_center DataAwsAccountaccessEntitlements#identity_center}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter(
  group_id: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessEntitlementsEntitlementsEntitlementList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole">principal_role</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_role`<sup>Required</sup> <a name="principal_role" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole"></a>

```python
principal_role: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessEntitlementsEntitlementsEntitlement
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal"></a>

```python
principal: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">identity_center</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```python
identity_center: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsList <a name="DataAwsAccountaccessEntitlementsEntitlementsList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessEntitlementsEntitlementsOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement"></a>

```python
entitlement: DataAwsAccountaccessEntitlementsEntitlementsEntitlementList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a>

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessEntitlementsEntitlements
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a>

---


### DataAwsAccountaccessEntitlementsFilterList <a name="DataAwsAccountaccessEntitlementsFilterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>]

---


### DataAwsAccountaccessEntitlementsFilterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole">put_principal_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole">reset_principal_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal_role` <a name="put_principal_role" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole"></a>

```python
def put_principal_role(
  value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRole]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]

---

##### `reset_principal_role` <a name="reset_principal_role" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole"></a>

```python
def reset_principal_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole">principal_role</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput">principal_role_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_role`<sup>Required</sup> <a name="principal_role" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole"></a>

```python
principal_role: DataAwsAccountaccessEntitlementsFilterPrincipalRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a>

---

##### `principal_role_input`<sup>Optional</sup> <a name="principal_role_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput"></a>

```python
principal_role_input: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRole]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsAccountaccessEntitlementsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRole]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal"></a>

```python
def put_principal(
  value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal"></a>

```python
principal: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_entitlements

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter">put_identity_center</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter">reset_identity_center</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identity_center` <a name="put_identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```python
def put_identity_center(
  value: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]

---

##### `reset_identity_center` <a name="reset_identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```python
def reset_identity_center() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter">identity_center</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput">identity_center_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```python
identity_center: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a>

---

##### `identity_center_input`<sup>Optional</sup> <a name="identity_center_input" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```python
identity_center_input: IResolvable | typing.List[DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>

---



