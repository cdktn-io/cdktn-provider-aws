# `dataAwsEc2CapacityBlockReservation` Submodule <a name="`dataAwsEc2CapacityBlockReservation` Submodule" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockReservation <a name="DataAwsEc2CapacityBlockReservation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter] = None,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#filter DataAwsEc2CapacityBlockReservation#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#region DataAwsEc2CapacityBlockReservation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2CapacityBlockReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount">available_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId">capacity_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo">commitment_info</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference">delivery_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized">ebs_optimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType">end_date_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform">instance_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation">interruptible_capacity_allocation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo">interruption_info</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn">placement_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType">reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `available_instance_count`<sup>Required</sup> <a name="available_instance_count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount"></a>

```python
available_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_block_id`<sup>Required</sup> <a name="capacity_block_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId"></a>

```python
capacity_block_id: str
```

- *Type:* str

---

##### `commitment_info`<sup>Required</sup> <a name="commitment_info" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo"></a>

```python
commitment_info: DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `delivery_preference`<sup>Required</sup> <a name="delivery_preference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference"></a>

```python
delivery_preference: str
```

- *Type:* str

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized"></a>

```python
ebs_optimized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_date_type`<sup>Required</sup> <a name="end_date_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType"></a>

```python
end_date_type: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter"></a>

```python
filter: DataAwsEc2CapacityBlockReservationFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a>

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_match_criteria`<sup>Required</sup> <a name="instance_match_criteria" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `interruptible_capacity_allocation`<sup>Required</sup> <a name="interruptible_capacity_allocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation"></a>

```python
interruptible_capacity_allocation: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a>

---

##### `interruption_info`<sup>Required</sup> <a name="interruption_info" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo"></a>

```python
interruption_info: DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a>

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `placement_group_arn`<sup>Required</sup> <a name="placement_group_arn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn"></a>

```python
placement_group_arn: str
```

- *Type:* str

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType"></a>

```python
reservation_type: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfo <a name="DataAwsEc2CapacityBlockReservationCommitmentInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo()
```


### DataAwsEc2CapacityBlockReservationConfig <a name="DataAwsEc2CapacityBlockReservationConfig" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter] = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#filter DataAwsEc2CapacityBlockReservation#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#region DataAwsEc2CapacityBlockReservation#region}

---

### DataAwsEc2CapacityBlockReservationFilter <a name="DataAwsEc2CapacityBlockReservationFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}.

---

### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation()
```


### DataAwsEc2CapacityBlockReservationInterruptionInfo <a name="DataAwsEc2CapacityBlockReservationInterruptionInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate">commitment_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount">committed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_end_date`<sup>Required</sup> <a name="commitment_end_date" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```python
commitment_end_date: str
```

- *Type:* str

---

##### `committed_instance_count`<sup>Required</sup> <a name="committed_instance_count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```python
committed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2CapacityBlockReservationCommitmentInfo
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a>

---


### DataAwsEc2CapacityBlockReservationFilterList <a name="DataAwsEc2CapacityBlockReservationFilterList" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2CapacityBlockReservationFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsEc2CapacityBlockReservationFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>]

---


### DataAwsEc2CapacityBlockReservationFilterOutputReference <a name="DataAwsEc2CapacityBlockReservationFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsEc2CapacityBlockReservationFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>

---


### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId">interruptible_capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType">interruption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interruptible_capacity_reservation_id`<sup>Required</sup> <a name="interruptible_capacity_reservation_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId"></a>

```python
interruptible_capacity_reservation_id: str
```

- *Type:* str

---

##### `interruption_type`<sup>Required</sup> <a name="interruption_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType"></a>

```python
interruption_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a>

---


### DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_capacity_block_reservation

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType">interruption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId">source_capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interruption_type`<sup>Required</sup> <a name="interruption_type" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType"></a>

```python
interruption_type: str
```

- *Type:* str

---

##### `source_capacity_reservation_id`<sup>Required</sup> <a name="source_capacity_reservation_id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId"></a>

```python
source_capacity_reservation_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2CapacityBlockReservationInterruptionInfo
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a>

---



