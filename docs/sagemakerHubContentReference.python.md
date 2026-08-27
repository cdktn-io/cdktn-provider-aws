# `sagemakerHubContentReference` Submodule <a name="`sagemakerHubContentReference` Submodule" id="@cdktn/provider-aws.sagemakerHubContentReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHubContentReference <a name="SagemakerHubContentReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference aws_sagemaker_hub_content_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReference(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub_content_name: str,
  hub_name: str,
  sagemaker_public_hub_content_arn: str,
  min_version: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerHubContentReferenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.hubContentName">hub_content_name</a></code> | <code>str</code> | Name of the hub content reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.hubName">hub_name</a></code> | <code>str</code> | Name of the private SageMaker Hub to add the content reference to. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.sagemakerPublicHubContentArn">sagemaker_public_hub_content_arn</a></code> | <code>str</code> | ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.minVersion">min_version</a></code> | <code>str</code> | Minimum version of the hub content to reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.hubContentName"></a>

- *Type:* str

Name of the hub content reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_content_name SagemakerHubContentReference#hub_content_name}

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.hubName"></a>

- *Type:* str

Name of the private SageMaker Hub to add the content reference to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_name SagemakerHubContentReference#hub_name}

---

##### `sagemaker_public_hub_content_arn`<sup>Required</sup> <a name="sagemaker_public_hub_content_arn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.sagemakerPublicHubContentArn"></a>

- *Type:* str

ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#sagemaker_public_hub_content_arn SagemakerHubContentReference#sagemaker_public_hub_content_arn}

---

##### `min_version`<sup>Optional</sup> <a name="min_version" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.minVersion"></a>

- *Type:* str

Minimum version of the hub content to reference.

Use "1.0.0" to support all versions. Changing this value to an empty string forces replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#min_version SagemakerHubContentReference#min_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#region SagemakerHubContentReference#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#timeouts SagemakerHubContentReference#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion">reset_min_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#create SagemakerHubContentReference#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#delete SagemakerHubContentReference#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#update SagemakerHubContentReference#update}

---

##### `reset_min_version` <a name="reset_min_version" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion"></a>

```python
def reset_min_version() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerHubContentReference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerHubContentReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerHubContentReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn">hub_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus">hub_content_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion">hub_content_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput">hub_content_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput">hub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput">min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput">sagemaker_public_hub_content_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName">hub_content_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName">hub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion">min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn">sagemaker_public_hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub_arn`<sup>Required</sup> <a name="hub_arn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn"></a>

```python
hub_arn: str
```

- *Type:* str

---

##### `hub_content_arn`<sup>Required</sup> <a name="hub_content_arn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

---

##### `hub_content_status`<sup>Required</sup> <a name="hub_content_status" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus"></a>

```python
hub_content_status: str
```

- *Type:* str

---

##### `hub_content_version`<sup>Required</sup> <a name="hub_content_version" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion"></a>

```python
hub_content_version: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts"></a>

```python
timeouts: SagemakerHubContentReferenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a>

---

##### `hub_content_name_input`<sup>Optional</sup> <a name="hub_content_name_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput"></a>

```python
hub_content_name_input: str
```

- *Type:* str

---

##### `hub_name_input`<sup>Optional</sup> <a name="hub_name_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput"></a>

```python
hub_name_input: str
```

- *Type:* str

---

##### `min_version_input`<sup>Optional</sup> <a name="min_version_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput"></a>

```python
min_version_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sagemaker_public_hub_content_arn_input`<sup>Optional</sup> <a name="sagemaker_public_hub_content_arn_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput"></a>

```python
sagemaker_public_hub_content_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SagemakerHubContentReferenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName"></a>

```python
hub_content_name: str
```

- *Type:* str

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName"></a>

```python
hub_name: str
```

- *Type:* str

---

##### `min_version`<sup>Required</sup> <a name="min_version" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion"></a>

```python
min_version: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sagemaker_public_hub_content_arn`<sup>Required</sup> <a name="sagemaker_public_hub_content_arn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn"></a>

```python
sagemaker_public_hub_content_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHubContentReferenceConfig <a name="SagemakerHubContentReferenceConfig" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReferenceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub_content_name: str,
  hub_name: str,
  sagemaker_public_hub_content_arn: str,
  min_version: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerHubContentReferenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName">hub_content_name</a></code> | <code>str</code> | Name of the hub content reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName">hub_name</a></code> | <code>str</code> | Name of the private SageMaker Hub to add the content reference to. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn">sagemaker_public_hub_content_arn</a></code> | <code>str</code> | ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion">min_version</a></code> | <code>str</code> | Minimum version of the hub content to reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub_content_name`<sup>Required</sup> <a name="hub_content_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName"></a>

```python
hub_content_name: str
```

- *Type:* str

Name of the hub content reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_content_name SagemakerHubContentReference#hub_content_name}

---

##### `hub_name`<sup>Required</sup> <a name="hub_name" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName"></a>

```python
hub_name: str
```

- *Type:* str

Name of the private SageMaker Hub to add the content reference to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_name SagemakerHubContentReference#hub_name}

---

##### `sagemaker_public_hub_content_arn`<sup>Required</sup> <a name="sagemaker_public_hub_content_arn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn"></a>

```python
sagemaker_public_hub_content_arn: str
```

- *Type:* str

ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#sagemaker_public_hub_content_arn SagemakerHubContentReference#sagemaker_public_hub_content_arn}

---

##### `min_version`<sup>Optional</sup> <a name="min_version" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion"></a>

```python
min_version: str
```

- *Type:* str

Minimum version of the hub content to reference.

Use "1.0.0" to support all versions. Changing this value to an empty string forces replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#min_version SagemakerHubContentReference#min_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#region SagemakerHubContentReference#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts"></a>

```python
timeouts: SagemakerHubContentReferenceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#timeouts SagemakerHubContentReference#timeouts}

---

### SagemakerHubContentReferenceTimeouts <a name="SagemakerHubContentReferenceTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#create SagemakerHubContentReference#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#delete SagemakerHubContentReference#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#update SagemakerHubContentReference#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHubContentReferenceTimeoutsOutputReference <a name="SagemakerHubContentReferenceTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_hub_content_reference

sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerHubContentReferenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---



