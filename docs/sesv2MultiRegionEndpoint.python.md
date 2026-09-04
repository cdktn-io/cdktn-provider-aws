# `sesv2MultiRegionEndpoint` Submodule <a name="`sesv2MultiRegionEndpoint` Submodule" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2MultiRegionEndpoint <a name="Sesv2MultiRegionEndpoint" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint aws_sesv2_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint(
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
  details: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Sesv2MultiRegionEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.details">details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]</code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.details"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails"></a>

```python
def put_details(
  value: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

##### `reset_details` <a name="reset_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Sesv2MultiRegionEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Sesv2MultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2MultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details">details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes">routes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput">details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details"></a>

```python
details: Sesv2MultiRegionEndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a>

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes"></a>

```python
routes: Sesv2MultiRegionEndpointRoutesList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts"></a>

```python
timeouts: Sesv2MultiRegionEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a>

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput"></a>

```python
details_input: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Sesv2MultiRegionEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2MultiRegionEndpointConfig <a name="Sesv2MultiRegionEndpointConfig" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  details: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Sesv2MultiRegionEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details">details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]</code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details"></a>

```python
details: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts"></a>

```python
timeouts: Sesv2MultiRegionEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

### Sesv2MultiRegionEndpointDetails <a name="Sesv2MultiRegionEndpointDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails(
  routes_details: IResolvable | typing.List[Sesv2MultiRegionEndpointDetailsRoutesDetails] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails">routes_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]</code> | routes_details block. |

---

##### `routes_details`<sup>Optional</sup> <a name="routes_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails"></a>

```python
routes_details: IResolvable | typing.List[Sesv2MultiRegionEndpointDetailsRoutesDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]

routes_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#routes_details Sesv2MultiRegionEndpoint#routes_details}

---

### Sesv2MultiRegionEndpointDetailsRoutesDetails <a name="Sesv2MultiRegionEndpointDetailsRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails(
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}.

---

### Sesv2MultiRegionEndpointRoutes <a name="Sesv2MultiRegionEndpointRoutes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes()
```


### Sesv2MultiRegionEndpointTimeouts <a name="Sesv2MultiRegionEndpointTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2MultiRegionEndpointDetailsList <a name="Sesv2MultiRegionEndpointDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Sesv2MultiRegionEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Sesv2MultiRegionEndpointDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>]

---


### Sesv2MultiRegionEndpointDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails">put_routes_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails">reset_routes_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_routes_details` <a name="put_routes_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails"></a>

```python
def put_routes_details(
  value: IResolvable | typing.List[Sesv2MultiRegionEndpointDetailsRoutesDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]

---

##### `reset_routes_details` <a name="reset_routes_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails"></a>

```python
def reset_routes_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails">routes_details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput">routes_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routes_details`<sup>Required</sup> <a name="routes_details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails"></a>

```python
routes_details: Sesv2MultiRegionEndpointDetailsRoutesDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a>

---

##### `routes_details_input`<sup>Optional</sup> <a name="routes_details_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput"></a>

```python
routes_details_input: IResolvable | typing.List[Sesv2MultiRegionEndpointDetailsRoutesDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Sesv2MultiRegionEndpointDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsList <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Sesv2MultiRegionEndpointDetailsRoutesDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>]

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>

---


### Sesv2MultiRegionEndpointRoutesList <a name="Sesv2MultiRegionEndpointRoutesList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Sesv2MultiRegionEndpointRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Sesv2MultiRegionEndpointRoutesOutputReference <a name="Sesv2MultiRegionEndpointRoutesOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2MultiRegionEndpointRoutes
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a>

---


### Sesv2MultiRegionEndpointTimeoutsOutputReference <a name="Sesv2MultiRegionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sesv2_multi_region_endpoint

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Sesv2MultiRegionEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---



