# `dataAwsOdbNetworkPeeringConnections` Submodule <a name="`dataAwsOdbNetworkPeeringConnections` Submodule" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbNetworkPeeringConnections <a name="DataAwsOdbNetworkPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections aws_odb_network_peering_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  odb_peering_connections: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.odbPeeringConnections">odb_peering_connections</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]</code> | odb_peering_connections block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `odb_peering_connections`<sup>Optional</sup> <a name="odb_peering_connections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.odbPeeringConnections"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]

odb_peering_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections#odb_peering_connections DataAwsOdbNetworkPeeringConnections#odb_peering_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections#region DataAwsOdbNetworkPeeringConnections#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections">put_odb_peering_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections">reset_odb_peering_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_odb_peering_connections` <a name="put_odb_peering_connections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections"></a>

```python
def put_odb_peering_connections(
  value: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]

---

##### `reset_odb_peering_connections` <a name="reset_odb_peering_connections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections"></a>

```python
def reset_odb_peering_connections() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOdbNetworkPeeringConnections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOdbNetworkPeeringConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbNetworkPeeringConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections">odb_peering_connections</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput">odb_peering_connections_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `odb_peering_connections`<sup>Required</sup> <a name="odb_peering_connections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections"></a>

```python
odb_peering_connections: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a>

---

##### `odb_peering_connections_input`<sup>Optional</sup> <a name="odb_peering_connections_input" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput"></a>

```python
odb_peering_connections_input: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbNetworkPeeringConnectionsConfig <a name="DataAwsOdbNetworkPeeringConnectionsConfig" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  odb_peering_connections: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections">odb_peering_connections</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]</code> | odb_peering_connections block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `odb_peering_connections`<sup>Optional</sup> <a name="odb_peering_connections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections"></a>

```python
odb_peering_connections: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]

odb_peering_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections#odb_peering_connections DataAwsOdbNetworkPeeringConnections#odb_peering_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/odb_network_peering_connections#region DataAwsOdbNetworkPeeringConnections#region}

---

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>]

---


### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network_peering_connections

dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>

---



