# `dataAwsEc2ServiceLinkVirtualInterfaces` Submodule <a name="`dataAwsEc2ServiceLinkVirtualInterfaces` Submodule" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ServiceLinkVirtualInterfaces <a name="DataAwsEc2ServiceLinkVirtualInterfaces" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces aws_ec2_service_link_virtual_interfaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#filter DataAwsEc2ServiceLinkVirtualInterfaces#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#region DataAwsEc2ServiceLinkVirtualInterfaces#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2ServiceLinkVirtualInterfaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2ServiceLinkVirtualInterfaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ServiceLinkVirtualInterfaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter"></a>

```python
filter: DataAwsEc2ServiceLinkVirtualInterfacesFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesConfig <a name="DataAwsEc2ServiceLinkVirtualInterfacesConfig" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#filter DataAwsEc2ServiceLinkVirtualInterfaces#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#region DataAwsEc2ServiceLinkVirtualInterfaces#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}.

---

### DataAwsEc2ServiceLinkVirtualInterfacesFilter <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesFilterList <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterList" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsEc2ServiceLinkVirtualInterfacesFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>]

---


### DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_ec2_service_link_virtual_interfaces

dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsEc2ServiceLinkVirtualInterfacesFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>

---



