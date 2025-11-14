# `bedrockagentcoreWorkloadIdentity` Submodule <a name="`bedrockagentcoreWorkloadIdentity` Submodule" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreWorkloadIdentity <a name="BedrockagentcoreWorkloadIdentity" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity aws_bedrockagentcore_workload_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allowed_resource_oauth2_return_urls: typing.List[str] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.allowedResourceOauth2ReturnUrls">allowed_resource_oauth2_return_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}.

---

##### `allowed_resource_oauth2_return_urls`<sup>Optional</sup> <a name="allowed_resource_oauth2_return_urls" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.allowedResourceOauth2ReturnUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#region BedrockagentcoreWorkloadIdentity#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls">reset_allowed_resource_oauth2_return_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_resource_oauth2_return_urls` <a name="reset_allowed_resource_oauth2_return_urls" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls"></a>

```python
def reset_allowed_resource_oauth2_return_urls() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreWorkloadIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreWorkloadIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreWorkloadIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn">workload_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput">allowed_resource_oauth2_return_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls">allowed_resource_oauth2_return_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `workload_identity_arn`<sup>Required</sup> <a name="workload_identity_arn" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn"></a>

```python
workload_identity_arn: str
```

- *Type:* str

---

##### `allowed_resource_oauth2_return_urls_input`<sup>Optional</sup> <a name="allowed_resource_oauth2_return_urls_input" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput"></a>

```python
allowed_resource_oauth2_return_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `allowed_resource_oauth2_return_urls`<sup>Required</sup> <a name="allowed_resource_oauth2_return_urls" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls"></a>

```python
allowed_resource_oauth2_return_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreWorkloadIdentityConfig <a name="BedrockagentcoreWorkloadIdentityConfig" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_workload_identity

bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allowed_resource_oauth2_return_urls: typing.List[str] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls">allowed_resource_oauth2_return_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}.

---

##### `allowed_resource_oauth2_return_urls`<sup>Optional</sup> <a name="allowed_resource_oauth2_return_urls" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls"></a>

```python
allowed_resource_oauth2_return_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_workload_identity#region BedrockagentcoreWorkloadIdentity#region}

---



