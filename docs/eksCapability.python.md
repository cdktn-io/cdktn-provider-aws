# `eksCapability` Submodule <a name="`eksCapability` Submodule" id="@cdktn/provider-aws.eksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCapability <a name="EksCapability" id="@cdktn/provider-aws.eksCapability.EksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability aws_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapability(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_name: str,
  cluster_name: str,
  delete_propagation_policy: str,
  role_arn: str,
  type: str,
  configuration: IResolvable | typing.List[EksCapabilityConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EksCapabilityTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.capabilityName">capability_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.configuration">configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#tags EksCapability#tags}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.capabilityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}.

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.configuration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#region EksCapability#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#tags EksCapability#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.eksCapability.EksCapability.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapability.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.eksCapability.EksCapability.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.eksCapability.EksCapability.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapability.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.eksCapability.EksCapability.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.eksCapability.EksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.eksCapability.EksCapability.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.eksCapability.EksCapability.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.eksCapability.EksCapability.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.eksCapability.EksCapability.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.eksCapability.EksCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.eksCapability.EksCapability.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.eksCapability.EksCapability.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapability.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCapability.EksCapability.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.eksCapability.EksCapability.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapability.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.eksCapability.EksCapability.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.eksCapability.EksCapability.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapability.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.eksCapability.EksCapability.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapability.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-aws.eksCapability.EksCapability.putConfiguration"></a>

```python
def put_configuration(
  value: IResolvable | typing.List[EksCapabilityConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapability.putConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.eksCapability.EksCapability.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.eksCapability.EksCapability.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#create EksCapability#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.eksCapability.EksCapability.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete EksCapability#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.eksCapability.EksCapability.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#update EksCapability#update}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-aws.eksCapability.EksCapability.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.eksCapability.EksCapability.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.eksCapability.EksCapability.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.eksCapability.EksCapability.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.eksCapability.EksCapability.isConstruct"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapability.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCapability.EksCapability.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.eksCapability.EksCapability.isTerraformElement"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapability.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCapability.EksCapability.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapability.isTerraformResource"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapability.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCapability.EksCapability.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapability.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksCapability to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.capabilityNameInput">capability_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.configurationInput">configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput">delete_propagation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.capabilityName">capability_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.eksCapability.EksCapability.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.eksCapability.EksCapability.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapability.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.eksCapability.EksCapability.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.eksCapability.EksCapability.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.eksCapability.EksCapability.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.eksCapability.EksCapability.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.eksCapability.EksCapability.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.eksCapability.EksCapability.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCapability.EksCapability.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.eksCapability.EksCapability.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.eksCapability.EksCapability.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.eksCapability.EksCapability.property.configuration"></a>

```python
configuration: EksCapabilityConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.eksCapability.EksCapability.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.eksCapability.EksCapability.property.timeouts"></a>

```python
timeouts: EksCapabilityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.eksCapability.EksCapability.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `capability_name_input`<sup>Optional</sup> <a name="capability_name_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.capabilityNameInput"></a>

```python
capability_name_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.configurationInput"></a>

```python
configuration_input: IResolvable | typing.List[EksCapabilityConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]

---

##### `delete_propagation_policy_input`<sup>Optional</sup> <a name="delete_propagation_policy_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput"></a>

```python
delete_propagation_policy_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | EksCapabilityTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.eksCapability.EksCapability.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-aws.eksCapability.EksCapability.property.capabilityName"></a>

```python
capability_name: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-aws.eksCapability.EksCapability.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy"></a>

```python
delete_propagation_policy: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.eksCapability.EksCapability.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.eksCapability.EksCapability.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.eksCapability.EksCapability.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCapability.EksCapability.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapability.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.eksCapability.EksCapability.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksCapabilityConfig <a name="EksCapabilityConfig" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_name: str,
  cluster_name: str,
  delete_propagation_policy: str,
  role_arn: str,
  type: str,
  configuration: IResolvable | typing.List[EksCapabilityConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EksCapabilityTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName">capability_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy">delete_propagation_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.configuration">configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#tags EksCapability#tags}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capability_name`<sup>Required</sup> <a name="capability_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName"></a>

```python
capability_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}.

---

##### `delete_propagation_policy`<sup>Required</sup> <a name="delete_propagation_policy" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy"></a>

```python
delete_propagation_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.configuration"></a>

```python
configuration: IResolvable | typing.List[EksCapabilityConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#region EksCapability#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#tags EksCapability#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts"></a>

```python
timeouts: EksCapabilityTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}

---

### EksCapabilityConfiguration <a name="EksCapabilityConfiguration" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfiguration(
  argo_cd: IResolvable | typing.List[EksCapabilityConfigurationArgoCd] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd">argo_cd</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]</code> | argo_cd block. |

---

##### `argo_cd`<sup>Optional</sup> <a name="argo_cd" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd"></a>

```python
argo_cd: IResolvable | typing.List[EksCapabilityConfigurationArgoCd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]

argo_cd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

### EksCapabilityConfigurationArgoCd <a name="EksCapabilityConfigurationArgoCd" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCd(
  aws_idc: IResolvable | typing.List[EksCapabilityConfigurationArgoCdAwsIdc] = None,
  namespace: str = None,
  network_access: IResolvable | typing.List[EksCapabilityConfigurationArgoCdNetworkAccess] = None,
  rbac_role_mapping: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMapping] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc">aws_idc</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]</code> | aws_idc block. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#namespace EksCapability#namespace}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess">network_access</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]</code> | network_access block. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping">rbac_role_mapping</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]</code> | rbac_role_mapping block. |

---

##### `aws_idc`<sup>Optional</sup> <a name="aws_idc" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc"></a>

```python
aws_idc: IResolvable | typing.List[EksCapabilityConfigurationArgoCdAwsIdc]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]

aws_idc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#namespace EksCapability#namespace}.

---

##### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess"></a>

```python
network_access: IResolvable | typing.List[EksCapabilityConfigurationArgoCdNetworkAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]

network_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

##### `rbac_role_mapping`<sup>Optional</sup> <a name="rbac_role_mapping" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping"></a>

```python
rbac_role_mapping: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMapping]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]

rbac_role_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#rbac_role_mapping EksCapability#rbac_role_mapping}

---

### EksCapabilityConfigurationArgoCdAwsIdc <a name="EksCapabilityConfigurationArgoCdAwsIdc" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdAwsIdc(
  idc_instance_arn: str,
  idc_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion">idc_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}. |

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}.

---

##### `idc_region`<sup>Optional</sup> <a name="idc_region" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion"></a>

```python
idc_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}.

---

### EksCapabilityConfigurationArgoCdNetworkAccess <a name="EksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess(
  vpce_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}. |

---

##### `vpce_ids`<sup>Optional</sup> <a name="vpce_ids" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}.

---

### EksCapabilityConfigurationArgoCdRbacRoleMapping <a name="EksCapabilityConfigurationArgoCdRbacRoleMapping" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping(
  role: str,
  identity: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role EksCapability#role}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity">identity</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]</code> | identity block. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#role EksCapability#role}.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity"></a>

```python
identity: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#identity EksCapability#identity}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#id EksCapability#id}. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#id EksCapability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#type EksCapability#type}.

---

### EksCapabilityTimeouts <a name="EksCapabilityTimeouts" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#create EksCapability#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#delete EksCapability#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability#update EksCapability#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EksCapabilityConfigurationArgoCdAwsIdcList <a name="EksCapabilityConfigurationArgoCdAwsIdcList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdAwsIdc]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]

---


### EksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="EksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion">reset_idc_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idc_region` <a name="reset_idc_region" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion"></a>

```python
def reset_idc_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">idc_managed_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput">idc_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput">idc_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">idc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idc_managed_application_arn`<sup>Required</sup> <a name="idc_managed_application_arn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```python
idc_managed_application_arn: str
```

- *Type:* str

---

##### `idc_instance_arn_input`<sup>Optional</sup> <a name="idc_instance_arn_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput"></a>

```python
idc_instance_arn_input: str
```

- *Type:* str

---

##### `idc_region_input`<sup>Optional</sup> <a name="idc_region_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput"></a>

```python
idc_region_input: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `idc_region`<sup>Required</sup> <a name="idc_region" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```python
idc_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---


### EksCapabilityConfigurationArgoCdList <a name="EksCapabilityConfigurationArgoCdList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]

---


### EksCapabilityConfigurationArgoCdNetworkAccessList <a name="EksCapabilityConfigurationArgoCdNetworkAccessList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdNetworkAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]

---


### EksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="EksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds">reset_vpce_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpce_ids` <a name="reset_vpce_ids" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds"></a>

```python
def reset_vpce_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput">vpce_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpce_ids_input`<sup>Optional</sup> <a name="vpce_ids_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput"></a>

```python
vpce_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpce_ids`<sup>Required</sup> <a name="vpce_ids" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### EksCapabilityConfigurationArgoCdOutputReference <a name="EksCapabilityConfigurationArgoCdOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc">put_aws_idc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess">put_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping">put_rbac_role_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc">reset_aws_idc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess">reset_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping">reset_rbac_role_mapping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_idc` <a name="put_aws_idc" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc"></a>

```python
def put_aws_idc(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdAwsIdc]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]

---

##### `put_network_access` <a name="put_network_access" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess"></a>

```python
def put_network_access(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdNetworkAccess]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]

---

##### `put_rbac_role_mapping` <a name="put_rbac_role_mapping" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping"></a>

```python
def put_rbac_role_mapping(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMapping]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]

---

##### `reset_aws_idc` <a name="reset_aws_idc" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc"></a>

```python
def reset_aws_idc() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_network_access` <a name="reset_network_access" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess"></a>

```python
def reset_network_access() -> None
```

##### `reset_rbac_role_mapping` <a name="reset_rbac_role_mapping" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping"></a>

```python
def reset_rbac_role_mapping() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">aws_idc</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">network_access</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping">rbac_role_mapping</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput">aws_idc_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput">network_access_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput">rbac_role_mapping_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_idc`<sup>Required</sup> <a name="aws_idc" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```python
aws_idc: EksCapabilityConfigurationArgoCdAwsIdcList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a>

---

##### `network_access`<sup>Required</sup> <a name="network_access" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```python
network_access: EksCapabilityConfigurationArgoCdNetworkAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a>

---

##### `rbac_role_mapping`<sup>Required</sup> <a name="rbac_role_mapping" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping"></a>

```python
rbac_role_mapping: EksCapabilityConfigurationArgoCdRbacRoleMappingList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a>

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `aws_idc_input`<sup>Optional</sup> <a name="aws_idc_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput"></a>

```python
aws_idc_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdAwsIdc]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `network_access_input`<sup>Optional</sup> <a name="network_access_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput"></a>

```python
network_access_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdNetworkAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>]

---

##### `rbac_role_mapping_input`<sup>Optional</sup> <a name="rbac_role_mapping_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput"></a>

```python
rbac_role_mapping_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMapping]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCd
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMapping]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identity` <a name="put_identity" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity"></a>

```python
def put_identity(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]

---

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput">identity_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity"></a>

```python
identity: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput"></a>

```python
identity_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfigurationArgoCdRbacRoleMapping
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>

---


### EksCapabilityConfigurationList <a name="EksCapabilityConfigurationList" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksCapabilityConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksCapabilityConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>]

---


### EksCapabilityConfigurationOutputReference <a name="EksCapabilityConfigurationOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd">put_argo_cd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd">reset_argo_cd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_argo_cd` <a name="put_argo_cd" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd"></a>

```python
def put_argo_cd(
  value: IResolvable | typing.List[EksCapabilityConfigurationArgoCd]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]

---

##### `reset_argo_cd` <a name="reset_argo_cd" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd"></a>

```python
def reset_argo_cd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd">argo_cd</a></code> | <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput">argo_cd_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `argo_cd`<sup>Required</sup> <a name="argo_cd" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd"></a>

```python
argo_cd: EksCapabilityConfigurationArgoCdList
```

- *Type:* <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a>

---

##### `argo_cd_input`<sup>Optional</sup> <a name="argo_cd_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput"></a>

```python
argo_cd_input: IResolvable | typing.List[EksCapabilityConfigurationArgoCd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---


### EksCapabilityTimeoutsOutputReference <a name="EksCapabilityTimeoutsOutputReference" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import eks_capability

eksCapability.EksCapabilityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksCapabilityTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---



