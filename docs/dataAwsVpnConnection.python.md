# `dataAwsVpnConnection` Submodule <a name="`dataAwsVpnConnection` Submodule" id="@cdktf/provider-aws.dataAwsVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpnConnection <a name="DataAwsVpnConnection" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsVpnConnectionFilter] = None,
  region: str = None,
  vpn_connection_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.vpnConnectionId">vpn_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.filter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#filter DataAwsVpnConnection#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#region DataAwsVpnConnection#region}

---

##### `vpn_connection_id`<sup>Optional</sup> <a name="vpn_connection_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.vpnConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetVpnConnectionId">reset_vpn_connection_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsVpnConnectionFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_vpn_connection_id` <a name="reset_vpn_connection_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetVpnConnectionId"></a>

```python
def reset_vpn_connection_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsVpnConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkAttachmentArn">core_network_attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayConfiguration">customer_gateway_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList">DataAwsVpnConnectionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.gatewayAssociationState">gateway_association_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.preSharedKeyArn">pre_shared_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList">DataAwsVpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vgwTelemetries">vgw_telemetries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList">DataAwsVpnConnectionVgwTelemetriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionIdInput">vpn_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionId">vpn_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_attachment_arn`<sup>Required</sup> <a name="core_network_attachment_arn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkAttachmentArn"></a>

```python
core_network_attachment_arn: str
```

- *Type:* str

---

##### `customer_gateway_configuration`<sup>Required</sup> <a name="customer_gateway_configuration" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayConfiguration"></a>

```python
customer_gateway_configuration: str
```

- *Type:* str

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filter"></a>

```python
filter: DataAwsVpnConnectionFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList">DataAwsVpnConnectionFilterList</a>

---

##### `gateway_association_state`<sup>Required</sup> <a name="gateway_association_state" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.gatewayAssociationState"></a>

```python
gateway_association_state: str
```

- *Type:* str

---

##### `pre_shared_key_arn`<sup>Required</sup> <a name="pre_shared_key_arn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.preSharedKeyArn"></a>

```python
pre_shared_key_arn: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.routes"></a>

```python
routes: DataAwsVpnConnectionRoutesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList">DataAwsVpnConnectionRoutesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vgw_telemetries`<sup>Required</sup> <a name="vgw_telemetries" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vgwTelemetries"></a>

```python
vgw_telemetries: DataAwsVpnConnectionVgwTelemetriesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList">DataAwsVpnConnectionVgwTelemetriesList</a>

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsVpnConnectionFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `vpn_connection_id_input`<sup>Optional</sup> <a name="vpn_connection_id_input" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionIdInput"></a>

```python
vpn_connection_id_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `vpn_connection_id`<sup>Required</sup> <a name="vpn_connection_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionId"></a>

```python
vpn_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpnConnectionConfig <a name="DataAwsVpnConnectionConfig" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsVpnConnectionFilter] = None,
  region: str = None,
  vpn_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.vpnConnectionId">vpn_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsVpnConnectionFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#filter DataAwsVpnConnection#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#region DataAwsVpnConnection#region}

---

##### `vpn_connection_id`<sup>Optional</sup> <a name="vpn_connection_id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.vpnConnectionId"></a>

```python
vpn_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}.

---

### DataAwsVpnConnectionFilter <a name="DataAwsVpnConnectionFilter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#name DataAwsVpnConnection#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#values DataAwsVpnConnection#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#name DataAwsVpnConnection#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/vpn_connection#values DataAwsVpnConnection#values}.

---

### DataAwsVpnConnectionRoutes <a name="DataAwsVpnConnectionRoutes" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionRoutes()
```


### DataAwsVpnConnectionVgwTelemetries <a name="DataAwsVpnConnectionVgwTelemetries" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpnConnectionFilterList <a name="DataAwsVpnConnectionFilterList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpnConnectionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsVpnConnectionFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>]

---


### DataAwsVpnConnectionFilterOutputReference <a name="DataAwsVpnConnectionFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsVpnConnectionFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>

---


### DataAwsVpnConnectionRoutesList <a name="DataAwsVpnConnectionRoutesList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpnConnectionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsVpnConnectionRoutesOutputReference <a name="DataAwsVpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes">DataAwsVpnConnectionRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsVpnConnectionRoutes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes">DataAwsVpnConnectionRoutes</a>

---


### DataAwsVpnConnectionVgwTelemetriesList <a name="DataAwsVpnConnectionVgwTelemetriesList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpnConnectionVgwTelemetriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsVpnConnectionVgwTelemetriesOutputReference <a name="DataAwsVpnConnectionVgwTelemetriesOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpn_connection

dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.acceptedRouteCount">accepted_route_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.lastStatusChange">last_status_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.outsideIpAddress">outside_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries">DataAwsVpnConnectionVgwTelemetries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepted_route_count`<sup>Required</sup> <a name="accepted_route_count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.acceptedRouteCount"></a>

```python
accepted_route_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_status_change`<sup>Required</sup> <a name="last_status_change" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.lastStatusChange"></a>

```python
last_status_change: str
```

- *Type:* str

---

##### `outside_ip_address`<sup>Required</sup> <a name="outside_ip_address" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.outsideIpAddress"></a>

```python
outside_ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsVpnConnectionVgwTelemetries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries">DataAwsVpnConnectionVgwTelemetries</a>

---



