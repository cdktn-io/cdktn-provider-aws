# `opensearchserverlessCollectionGroup` Submodule <a name="`opensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollectionGroup <a name="OpensearchserverlessCollectionGroup" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup(
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
  standby_replicas: str,
  capacity_limits: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits] = None,
  description: str = None,
  generation: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.standbyReplicas">standby_replicas</a></code> | <code>str</code> | Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.capacityLimits">capacity_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.generation">generation</a></code> | <code>str</code> | Generation of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `standby_replicas`<sup>Required</sup> <a name="standby_replicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.standbyReplicas"></a>

- *Type:* str

Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `capacity_limits`<sup>Optional</sup> <a name="capacity_limits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.capacityLimits"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.description"></a>

- *Type:* str

Description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.generation"></a>

- *Type:* str

Generation of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#generation OpensearchserverlessCollectionGroup#generation}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits">put_capacity_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits">reset_capacity_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration">reset_generation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_limits` <a name="put_capacity_limits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits"></a>

```python
def put_capacity_limits(
  value: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]

---

##### `reset_capacity_limits` <a name="reset_capacity_limits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits"></a>

```python
def reset_capacity_limits() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_generation` <a name="reset_generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration"></a>

```python
def reset_generation() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserverlessCollectionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits">capacity_limits</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput">capacity_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput">standby_replicas_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas">standby_replicas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_limits`<sup>Required</sup> <a name="capacity_limits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```python
capacity_limits: OpensearchserverlessCollectionGroupCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `capacity_limits_input`<sup>Optional</sup> <a name="capacity_limits_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput"></a>

```python
capacity_limits_input: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `standby_replicas_input`<sup>Optional</sup> <a name="standby_replicas_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput"></a>

```python
standby_replicas_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `standby_replicas`<sup>Required</sup> <a name="standby_replicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```python
standby_replicas: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionGroupCapacityLimits <a name="OpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits(
  max_indexing_capacity_in_ocu: typing.Union[int, float] = None,
  max_search_capacity_in_ocu: typing.Union[int, float] = None,
  min_indexing_capacity_in_ocu: typing.Union[int, float] = None,
  min_search_capacity_in_ocu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu">max_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu">max_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu">min_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu">min_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}. |

---

##### `max_indexing_capacity_in_ocu`<sup>Optional</sup> <a name="max_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu"></a>

```python
max_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}.

---

##### `max_search_capacity_in_ocu`<sup>Optional</sup> <a name="max_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu"></a>

```python
max_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}.

---

##### `min_indexing_capacity_in_ocu`<sup>Optional</sup> <a name="min_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu"></a>

```python
min_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}.

---

##### `min_search_capacity_in_ocu`<sup>Optional</sup> <a name="min_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu"></a>

```python
min_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}.

---

### OpensearchserverlessCollectionGroupConfig <a name="OpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  standby_replicas: str,
  capacity_limits: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits] = None,
  description: str = None,
  generation: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas">standby_replicas</a></code> | <code>str</code> | Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits">capacity_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description">description</a></code> | <code>str</code> | Description of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation">generation</a></code> | <code>str</code> | Generation of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `standby_replicas`<sup>Required</sup> <a name="standby_replicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas"></a>

```python
standby_replicas: str
```

- *Type:* str

Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `capacity_limits`<sup>Optional</sup> <a name="capacity_limits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits"></a>

```python
capacity_limits: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation"></a>

```python
generation: str
```

- *Type:* str

Generation of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#generation OpensearchserverlessCollectionGroup#generation}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionGroupCapacityLimitsList <a name="OpensearchserverlessCollectionGroupCapacityLimitsList" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserverlessCollectionGroupCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserverlessCollectionGroupCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>]

---


### OpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="OpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_collection_group

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu">reset_max_indexing_capacity_in_ocu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu">reset_max_search_capacity_in_ocu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu">reset_min_indexing_capacity_in_ocu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu">reset_min_search_capacity_in_ocu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_indexing_capacity_in_ocu` <a name="reset_max_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu"></a>

```python
def reset_max_indexing_capacity_in_ocu() -> None
```

##### `reset_max_search_capacity_in_ocu` <a name="reset_max_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu"></a>

```python
def reset_max_search_capacity_in_ocu() -> None
```

##### `reset_min_indexing_capacity_in_ocu` <a name="reset_min_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu"></a>

```python
def reset_min_indexing_capacity_in_ocu() -> None
```

##### `reset_min_search_capacity_in_ocu` <a name="reset_min_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu"></a>

```python
def reset_min_search_capacity_in_ocu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput">max_indexing_capacity_in_ocu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput">max_search_capacity_in_ocu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput">min_indexing_capacity_in_ocu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput">min_search_capacity_in_ocu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">max_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">max_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">min_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">min_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_indexing_capacity_in_ocu_input`<sup>Optional</sup> <a name="max_indexing_capacity_in_ocu_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput"></a>

```python
max_indexing_capacity_in_ocu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_search_capacity_in_ocu_input`<sup>Optional</sup> <a name="max_search_capacity_in_ocu_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput"></a>

```python
max_search_capacity_in_ocu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_indexing_capacity_in_ocu_input`<sup>Optional</sup> <a name="min_indexing_capacity_in_ocu_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput"></a>

```python
min_indexing_capacity_in_ocu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_search_capacity_in_ocu_input`<sup>Optional</sup> <a name="min_search_capacity_in_ocu_input" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput"></a>

```python
min_search_capacity_in_ocu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_indexing_capacity_in_ocu`<sup>Required</sup> <a name="max_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```python
max_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_search_capacity_in_ocu`<sup>Required</sup> <a name="max_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```python
max_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_indexing_capacity_in_ocu`<sup>Required</sup> <a name="min_indexing_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```python
min_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_search_capacity_in_ocu`<sup>Required</sup> <a name="min_search_capacity_in_ocu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```python
min_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessCollectionGroupCapacityLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---



