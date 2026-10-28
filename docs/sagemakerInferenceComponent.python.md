# `sagemakerInferenceComponent` Submodule <a name="`sagemakerInferenceComponent` Submodule" id="@cdktn/provider-aws.sagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceComponent <a name="SagemakerInferenceComponent" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponent(
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
  name: str,
  deployment_config: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig] = None,
  region: str = None,
  runtime_config: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig] = None,
  specification: IResolvable | typing.List[SagemakerInferenceComponentSpecification] = None,
  specifications: IResolvable | typing.List[SagemakerInferenceComponentSpecifications] = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerInferenceComponentTimeouts = None,
  variant_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.deploymentConfig">deployment_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]</code> | deployment_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.runtimeConfig">runtime_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]</code> | runtime_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.specification">specification</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]</code> | specification block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.specifications">specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]</code> | specifications block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.variantName">variant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}.

---

##### `deployment_config`<sup>Optional</sup> <a name="deployment_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.deploymentConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.runtimeConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.specification"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]

specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `specifications`<sup>Optional</sup> <a name="specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.specifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]

specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}

---

##### `variant_name`<sup>Optional</sup> <a name="variant_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.variantName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig">put_deployment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification">put_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications">put_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig">reset_deployment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification">reset_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications">reset_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName">reset_variant_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_config` <a name="put_deployment_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig"></a>

```python
def put_deployment_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig"></a>

```python
def put_runtime_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]

---

##### `put_specification` <a name="put_specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification"></a>

```python
def put_specification(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecification]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]

---

##### `put_specifications` <a name="put_specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications"></a>

```python
def put_specifications(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}

---

##### `reset_deployment_config` <a name="reset_deployment_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig"></a>

```python
def reset_deployment_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```

##### `reset_specification` <a name="reset_specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification"></a>

```python
def reset_specification() -> None
```

##### `reset_specifications` <a name="reset_specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications"></a>

```python
def reset_specifications() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_variant_name` <a name="reset_variant_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName"></a>

```python
def reset_variant_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerInferenceComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig">deployment_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification">specification</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications">specifications</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput">deployment_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput">runtime_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput">specification_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput">specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput">variant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName">variant_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deployment_config`<sup>Required</sup> <a name="deployment_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig"></a>

```python
deployment_config: SagemakerInferenceComponentDeploymentConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a>

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig"></a>

```python
runtime_config: SagemakerInferenceComponentRuntimeConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a>

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification"></a>

```python
specification: SagemakerInferenceComponentSpecificationList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a>

---

##### `specifications`<sup>Required</sup> <a name="specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications"></a>

```python
specifications: SagemakerInferenceComponentSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts"></a>

```python
timeouts: SagemakerInferenceComponentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a>

---

##### `deployment_config_input`<sup>Optional</sup> <a name="deployment_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput"></a>

```python
deployment_config_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput"></a>

```python
runtime_config_input: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]

---

##### `specification_input`<sup>Optional</sup> <a name="specification_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput"></a>

```python
specification_input: IResolvable | typing.List[SagemakerInferenceComponentSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]

---

##### `specifications_input`<sup>Optional</sup> <a name="specifications_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput"></a>

```python
specifications_input: IResolvable | typing.List[SagemakerInferenceComponentSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SagemakerInferenceComponentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `variant_name_input`<sup>Optional</sup> <a name="variant_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput"></a>

```python
variant_name_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceComponentConfig <a name="SagemakerInferenceComponentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  name: str,
  deployment_config: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig] = None,
  region: str = None,
  runtime_config: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig] = None,
  specification: IResolvable | typing.List[SagemakerInferenceComponentSpecification] = None,
  specifications: IResolvable | typing.List[SagemakerInferenceComponentSpecifications] = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerInferenceComponentTimeouts = None,
  variant_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig">deployment_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]</code> | deployment_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig">runtime_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]</code> | runtime_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification">specification</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]</code> | specification block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications">specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]</code> | specifications block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName">variant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}.

---

##### `deployment_config`<sup>Optional</sup> <a name="deployment_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig"></a>

```python
deployment_config: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig"></a>

```python
runtime_config: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification"></a>

```python
specification: IResolvable | typing.List[SagemakerInferenceComponentSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]

specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `specifications`<sup>Optional</sup> <a name="specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications"></a>

```python
specifications: IResolvable | typing.List[SagemakerInferenceComponentSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]

specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts"></a>

```python
timeouts: SagemakerInferenceComponentTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}

---

##### `variant_name`<sup>Optional</sup> <a name="variant_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}.

---

### SagemakerInferenceComponentDeploymentConfig <a name="SagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig(
  auto_rollback_configuration: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration] = None,
  rolling_update_policy: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]</code> | auto_rollback_configuration block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]</code> | rolling_update_policy block. |

---

##### `auto_rollback_configuration`<sup>Optional</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}

---

##### `rolling_update_policy`<sup>Optional</sup> <a name="rolling_update_policy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]

rolling_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration(
  alarms: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms">alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]</code> | alarms block. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```python
alarms: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms(
  alarm_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}. |

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy(
  wait_interval_in_seconds: typing.Union[int, float],
  maximum_batch_size: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize] = None,
  maximum_execution_timeout_in_seconds: typing.Union[int, float] = None,
  rollback_maximum_batch_size: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">maximum_batch_size</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]</code> | maximum_batch_size block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">maximum_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]</code> | rollback_maximum_batch_size block. |

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}.

---

##### `maximum_batch_size`<sup>Optional</sup> <a name="maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```python
maximum_batch_size: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]

maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}

---

##### `maximum_execution_timeout_in_seconds`<sup>Optional</sup> <a name="maximum_execution_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```python
maximum_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}.

---

##### `rollback_maximum_batch_size`<sup>Optional</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]

rollback_maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize(
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize(
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentRuntimeConfig <a name="SagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig(
  copy_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount">copy_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}. |

---

##### `copy_count`<sup>Required</sup> <a name="copy_count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount"></a>

```python
copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}.

---

### SagemakerInferenceComponentRuntimeConfigPlacementStatus <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus()
```


### SagemakerInferenceComponentSpecification <a name="SagemakerInferenceComponentSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecification(
  base_inference_component_name: str = None,
  compute_resource_requirements: IResolvable | typing.List[SagemakerInferenceComponentSpecificationComputeResourceRequirements] = None,
  container: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainer] = None,
  data_cache_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationDataCacheConfig] = None,
  instance_type: str = None,
  model_name: str = None,
  scheduling_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfig] = None,
  startup_parameters: IResolvable | typing.List[SagemakerInferenceComponentSpecificationStartupParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName">base_inference_component_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container">container</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig">data_cache_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig">scheduling_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters">startup_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]</code> | startup_parameters block. |

---

##### `base_inference_component_name`<sup>Optional</sup> <a name="base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName"></a>

```python
base_inference_component_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `compute_resource_requirements`<sup>Optional</sup> <a name="compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: IResolvable | typing.List[SagemakerInferenceComponentSpecificationComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container"></a>

```python
container: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `data_cache_config`<sup>Optional</sup> <a name="data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig"></a>

```python
data_cache_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `scheduling_config`<sup>Optional</sup> <a name="scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig"></a>

```python
scheduling_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `startup_parameters`<sup>Optional</sup> <a name="startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters"></a>

```python
startup_parameters: IResolvable | typing.List[SagemakerInferenceComponentSpecificationStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements(
  min_memory_required_in_mb: typing.Union[int, float],
  max_memory_required_in_mb: typing.Union[int, float] = None,
  number_of_accelerator_devices_required: typing.Union[int, float] = None,
  number_of_cpu_cores_required: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `max_memory_required_in_mb`<sup>Optional</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `number_of_accelerator_devices_required`<sup>Optional</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `number_of_cpu_cores_required`<sup>Optional</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationContainer <a name="SagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer(
  artifact_url: str = None,
  container_metrics_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig] = None,
  environment: typing.Mapping[str] = None,
  image: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl">artifact_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig">container_metrics_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `artifact_url`<sup>Optional</sup> <a name="artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `container_metrics_config`<sup>Optional</sup> <a name="container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig"></a>

```python
container_metrics_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig(
  metrics_endpoint: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint">metrics_endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | metrics_endpoint block. |

---

##### `metrics_endpoint`<sup>Optional</sup> <a name="metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```python
metrics_endpoint: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint(
  metrics_endpoint_path: str,
  metric_publish_frequency_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `metric_publish_frequency_in_seconds`<sup>Optional</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationDataCacheConfig <a name="SagemakerInferenceComponentSpecificationDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig(
  enable_caching: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching">enable_caching</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching"></a>

```python
enable_caching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecifications <a name="SagemakerInferenceComponentSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications(
  base_inference_component_name: str = None,
  compute_resource_requirements: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsComputeResourceRequirements] = None,
  container: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainer] = None,
  data_cache_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsDataCacheConfig] = None,
  instance_type: str = None,
  model_name: str = None,
  scheduling_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfig] = None,
  startup_parameters: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsStartupParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName">base_inference_component_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container">container</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig">data_cache_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig">scheduling_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters">startup_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]</code> | startup_parameters block. |

---

##### `base_inference_component_name`<sup>Optional</sup> <a name="base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName"></a>

```python
base_inference_component_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `compute_resource_requirements`<sup>Optional</sup> <a name="compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container"></a>

```python
container: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `data_cache_config`<sup>Optional</sup> <a name="data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig"></a>

```python
data_cache_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `scheduling_config`<sup>Optional</sup> <a name="scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig"></a>

```python
scheduling_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `startup_parameters`<sup>Optional</sup> <a name="startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters"></a>

```python
startup_parameters: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationSchedulingConfig <a name="SagemakerInferenceComponentSpecificationSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig(
  placement_strategy: str,
  availability_zone_balance: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]</code> | availability_zone_balance block. |

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `availability_zone_balance`<sup>Optional</sup> <a name="availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance(
  enforcement_mode: str,
  max_imbalance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `max_imbalance`<sup>Optional</sup> <a name="max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements(
  min_memory_required_in_mb: typing.Union[int, float],
  max_memory_required_in_mb: typing.Union[int, float] = None,
  number_of_accelerator_devices_required: typing.Union[int, float] = None,
  number_of_cpu_cores_required: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `max_memory_required_in_mb`<sup>Optional</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `number_of_accelerator_devices_required`<sup>Optional</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `number_of_cpu_cores_required`<sup>Optional</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationsContainer <a name="SagemakerInferenceComponentSpecificationsContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer(
  artifact_url: str = None,
  container_metrics_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig] = None,
  environment: typing.Mapping[str] = None,
  image: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl">artifact_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig">container_metrics_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `artifact_url`<sup>Optional</sup> <a name="artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `container_metrics_config`<sup>Optional</sup> <a name="container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig"></a>

```python
container_metrics_config: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig(
  metrics_endpoint: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint">metrics_endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | metrics_endpoint block. |

---

##### `metrics_endpoint`<sup>Optional</sup> <a name="metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```python
metrics_endpoint: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint(
  metrics_endpoint_path: str,
  metric_publish_frequency_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `metric_publish_frequency_in_seconds`<sup>Optional</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationsDataCacheConfig <a name="SagemakerInferenceComponentSpecificationsDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig(
  enable_caching: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching">enable_caching</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching"></a>

```python
enable_caching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecificationsSchedulingConfig <a name="SagemakerInferenceComponentSpecificationsSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig(
  placement_strategy: str,
  availability_zone_balance: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]</code> | availability_zone_balance block. |

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `availability_zone_balance`<sup>Optional</sup> <a name="availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance(
  enforcement_mode: str,
  max_imbalance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `max_imbalance`<sup>Optional</sup> <a name="max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsStartupParameters <a name="SagemakerInferenceComponentSpecificationsStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters(
  container_startup_health_check_timeout_in_seconds: typing.Union[int, float] = None,
  model_data_download_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Optional</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `model_data_download_timeout_in_seconds`<sup>Optional</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentSpecificationStartupParameters <a name="SagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters(
  container_startup_health_check_timeout_in_seconds: typing.Union[int, float] = None,
  model_data_download_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Optional</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `model_data_download_timeout_in_seconds`<sup>Optional</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentTimeouts <a name="SagemakerInferenceComponentTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">put_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alarms` <a name="put_alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```python
def put_alarms(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]

---

##### `reset_alarms` <a name="reset_alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```python
alarms: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```python
alarms_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerInferenceComponentDeploymentConfigList <a name="SagemakerInferenceComponentDeploymentConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>]

---


### SagemakerInferenceComponentDeploymentConfigOutputReference <a name="SagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration">put_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy">put_rolling_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration">reset_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy">reset_rolling_update_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_rollback_configuration` <a name="put_auto_rollback_configuration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```python
def put_auto_rollback_configuration(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]

---

##### `put_rolling_update_policy` <a name="put_rolling_update_policy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```python
def put_rolling_update_policy(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]

---

##### `reset_auto_rollback_configuration` <a name="reset_auto_rollback_configuration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```python
def reset_auto_rollback_configuration() -> None
```

##### `reset_rolling_update_policy` <a name="reset_rolling_update_policy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```python
def reset_rolling_update_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">auto_rollback_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">rolling_update_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_rollback_configuration`<sup>Required</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `rolling_update_policy`<sup>Required</sup> <a name="rolling_update_policy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a>

---

##### `auto_rollback_configuration_input`<sup>Optional</sup> <a name="auto_rollback_configuration_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```python
auto_rollback_configuration_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>]

---

##### `rolling_update_policy_input`<sup>Optional</sup> <a name="rolling_update_policy_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```python
rolling_update_policy_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">put_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">put_rollback_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">reset_maximum_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">reset_maximum_execution_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">reset_rollback_maximum_batch_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maximum_batch_size` <a name="put_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```python
def put_maximum_batch_size(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]

---

##### `put_rollback_maximum_batch_size` <a name="put_rollback_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```python
def put_rollback_maximum_batch_size(
  value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]

---

##### `reset_maximum_batch_size` <a name="reset_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```python
def reset_maximum_batch_size() -> None
```

##### `reset_maximum_execution_timeout_in_seconds` <a name="reset_maximum_execution_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```python
def reset_maximum_execution_timeout_in_seconds() -> None
```

##### `reset_rollback_maximum_batch_size` <a name="reset_rollback_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```python
def reset_rollback_maximum_batch_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">maximum_batch_size_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">maximum_execution_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">rollback_maximum_batch_size_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">wait_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximum_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_batch_size`<sup>Required</sup> <a name="maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```python
maximum_batch_size: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a>

---

##### `rollback_maximum_batch_size`<sup>Required</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a>

---

##### `maximum_batch_size_input`<sup>Optional</sup> <a name="maximum_batch_size_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```python
maximum_batch_size_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>]

---

##### `maximum_execution_timeout_in_seconds_input`<sup>Optional</sup> <a name="maximum_execution_timeout_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```python
maximum_execution_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rollback_maximum_batch_size_input`<sup>Optional</sup> <a name="rollback_maximum_batch_size_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```python
rollback_maximum_batch_size_input: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]

---

##### `wait_interval_in_seconds_input`<sup>Optional</sup> <a name="wait_interval_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```python
wait_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_execution_timeout_in_seconds`<sup>Required</sup> <a name="maximum_execution_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```python
maximum_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerInferenceComponentRuntimeConfigList <a name="SagemakerInferenceComponentRuntimeConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentRuntimeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>]

---


### SagemakerInferenceComponentRuntimeConfigOutputReference <a name="SagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">current_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">desired_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus">placement_status</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput">copy_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_copy_count`<sup>Required</sup> <a name="current_copy_count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```python
current_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_copy_count`<sup>Required</sup> <a name="desired_copy_count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```python
desired_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `placement_status`<sup>Required</sup> <a name="placement_status" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus"></a>

```python
placement_status: SagemakerInferenceComponentRuntimeConfigPlacementStatusList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a>

---

##### `copy_count_input`<sup>Optional</sup> <a name="copy_count_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput"></a>

```python
copy_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `copy_count`<sup>Required</sup> <a name="copy_count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```python
copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentRuntimeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusList <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount">current_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_copy_count`<sup>Required</sup> <a name="current_copy_count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount"></a>

```python
current_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerInferenceComponentRuntimeConfigPlacementStatus
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a>

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">reset_max_memory_required_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">reset_number_of_accelerator_devices_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">reset_number_of_cpu_cores_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_memory_required_in_mb` <a name="reset_max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```python
def reset_max_memory_required_in_mb() -> None
```

##### `reset_number_of_accelerator_devices_required` <a name="reset_number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```python
def reset_number_of_accelerator_devices_required() -> None
```

##### `reset_number_of_cpu_cores_required` <a name="reset_number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```python
def reset_number_of_cpu_cores_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">max_memory_required_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">min_memory_required_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">number_of_accelerator_devices_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">number_of_cpu_cores_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_required_in_mb_input`<sup>Optional</sup> <a name="max_memory_required_in_mb_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```python
max_memory_required_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb_input`<sup>Optional</sup> <a name="min_memory_required_in_mb_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```python
min_memory_required_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required_input`<sup>Optional</sup> <a name="number_of_accelerator_devices_required_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```python
number_of_accelerator_devices_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required_input`<sup>Optional</sup> <a name="number_of_cpu_cores_required_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```python
number_of_cpu_cores_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_required_in_mb`<sup>Required</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required`<sup>Required</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required`<sup>Required</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">reset_metric_publish_frequency_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_publish_frequency_in_seconds` <a name="reset_metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```python
def reset_metric_publish_frequency_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">metric_publish_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">metrics_endpoint_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds_input`<sup>Optional</sup> <a name="metric_publish_frequency_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```python
metric_publish_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path_input`<sup>Optional</sup> <a name="metrics_endpoint_path_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```python
metrics_endpoint_path_input: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds`<sup>Required</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">put_metrics_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">reset_metrics_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metrics_endpoint` <a name="put_metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```python
def put_metrics_endpoint(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]

---

##### `reset_metrics_endpoint` <a name="reset_metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```python
def reset_metrics_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">metrics_endpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">metrics_endpoint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_endpoint`<sup>Required</sup> <a name="metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```python
metrics_endpoint: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `metrics_endpoint_input`<sup>Optional</sup> <a name="metrics_endpoint_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```python
metrics_endpoint_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationContainerList <a name="SagemakerInferenceComponentSpecificationContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]

---


### SagemakerInferenceComponentSpecificationContainerOutputReference <a name="SagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig">put_container_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl">reset_artifact_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig">reset_container_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_metrics_config` <a name="put_container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig"></a>

```python
def put_container_metrics_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]

---

##### `reset_artifact_url` <a name="reset_artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl"></a>

```python
def reset_artifact_url() -> None
```

##### `reset_container_metrics_config` <a name="reset_container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig"></a>

```python
def reset_container_metrics_config() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig">container_metrics_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage">resolved_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput">artifact_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput">container_metrics_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">artifact_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_metrics_config`<sup>Required</sup> <a name="container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig"></a>

```python
container_metrics_config: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a>

---

##### `resolved_image`<sup>Required</sup> <a name="resolved_image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage"></a>

```python
resolved_image: str
```

- *Type:* str

---

##### `artifact_url_input`<sup>Optional</sup> <a name="artifact_url_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput"></a>

```python
artifact_url_input: str
```

- *Type:* str

---

##### `container_metrics_config_input`<sup>Optional</sup> <a name="container_metrics_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput"></a>

```python
container_metrics_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `artifact_url`<sup>Required</sup> <a name="artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationContainer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>

---


### SagemakerInferenceComponentSpecificationDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]

---


### SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput">enable_caching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching_input`<sup>Optional</sup> <a name="enable_caching_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput"></a>

```python
enable_caching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationList <a name="SagemakerInferenceComponentSpecificationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>]

---


### SagemakerInferenceComponentSpecificationOutputReference <a name="SagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements">put_compute_resource_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig">put_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig">put_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters">put_startup_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName">reset_base_inference_component_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements">reset_compute_resource_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig">reset_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig">reset_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters">reset_startup_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compute_resource_requirements` <a name="put_compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements"></a>

```python
def put_compute_resource_requirements(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationComputeResourceRequirements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]

---

##### `put_container` <a name="put_container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer"></a>

```python
def put_container(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]

---

##### `put_data_cache_config` <a name="put_data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig"></a>

```python
def put_data_cache_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationDataCacheConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]

---

##### `put_scheduling_config` <a name="put_scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig"></a>

```python
def put_scheduling_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]

---

##### `put_startup_parameters` <a name="put_startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters"></a>

```python
def put_startup_parameters(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationStartupParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]

---

##### `reset_base_inference_component_name` <a name="reset_base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName"></a>

```python
def reset_base_inference_component_name() -> None
```

##### `reset_compute_resource_requirements` <a name="reset_compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements"></a>

```python
def reset_compute_resource_requirements() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_data_cache_config` <a name="reset_data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig"></a>

```python
def reset_data_cache_config() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_scheduling_config` <a name="reset_scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig"></a>

```python
def reset_scheduling_config() -> None
```

##### `reset_startup_parameters` <a name="reset_startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters"></a>

```python
def reset_startup_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">startup_parameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput">base_inference_component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput">compute_resource_requirements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput">container_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput">data_cache_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput">scheduling_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput">startup_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">base_inference_component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_resource_requirements`<sup>Required</sup> <a name="compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: SagemakerInferenceComponentSpecificationComputeResourceRequirementsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```python
container: SagemakerInferenceComponentSpecificationContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: SagemakerInferenceComponentSpecificationDataCacheConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a>

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig"></a>

```python
scheduling_config: SagemakerInferenceComponentSpecificationSchedulingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a>

---

##### `startup_parameters`<sup>Required</sup> <a name="startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```python
startup_parameters: SagemakerInferenceComponentSpecificationStartupParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a>

---

##### `base_inference_component_name_input`<sup>Optional</sup> <a name="base_inference_component_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput"></a>

```python
base_inference_component_name_input: str
```

- *Type:* str

---

##### `compute_resource_requirements_input`<sup>Optional</sup> <a name="compute_resource_requirements_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput"></a>

```python
compute_resource_requirements_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput"></a>

```python
container_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>]

---

##### `data_cache_config_input`<sup>Optional</sup> <a name="data_cache_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput"></a>

```python
data_cache_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `scheduling_config_input`<sup>Optional</sup> <a name="scheduling_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput"></a>

```python
scheduling_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]

---

##### `startup_parameters_input`<sup>Optional</sup> <a name="startup_parameters_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput"></a>

```python
startup_parameters_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]

---

##### `base_inference_component_name`<sup>Required</sup> <a name="base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```python
base_inference_component_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">reset_max_imbalance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_imbalance` <a name="reset_max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```python
def reset_max_imbalance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">max_imbalance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `max_imbalance_input`<sup>Optional</sup> <a name="max_imbalance_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```python
max_imbalance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `max_imbalance`<sup>Required</sup> <a name="max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance">put_availability_zone_balance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance">reset_availability_zone_balance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_availability_zone_balance` <a name="put_availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```python
def put_availability_zone_balance(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]

---

##### `reset_availability_zone_balance` <a name="reset_availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```python
def reset_availability_zone_balance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">availability_zone_balance_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput">placement_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_balance`<sup>Required</sup> <a name="availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `availability_zone_balance_input`<sup>Optional</sup> <a name="availability_zone_balance_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```python
availability_zone_balance_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>]

---

##### `placement_strategy_input`<sup>Optional</sup> <a name="placement_strategy_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```python
placement_strategy_input: str
```

- *Type:* str

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">reset_max_memory_required_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">reset_number_of_accelerator_devices_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">reset_number_of_cpu_cores_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_memory_required_in_mb` <a name="reset_max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```python
def reset_max_memory_required_in_mb() -> None
```

##### `reset_number_of_accelerator_devices_required` <a name="reset_number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```python
def reset_number_of_accelerator_devices_required() -> None
```

##### `reset_number_of_cpu_cores_required` <a name="reset_number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```python
def reset_number_of_cpu_cores_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">max_memory_required_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">min_memory_required_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">number_of_accelerator_devices_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">number_of_cpu_cores_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_required_in_mb_input`<sup>Optional</sup> <a name="max_memory_required_in_mb_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```python
max_memory_required_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb_input`<sup>Optional</sup> <a name="min_memory_required_in_mb_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```python
min_memory_required_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required_input`<sup>Optional</sup> <a name="number_of_accelerator_devices_required_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```python
number_of_accelerator_devices_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required_input`<sup>Optional</sup> <a name="number_of_cpu_cores_required_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```python
number_of_cpu_cores_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_required_in_mb`<sup>Required</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required`<sup>Required</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required`<sup>Required</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">reset_metric_publish_frequency_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_publish_frequency_in_seconds` <a name="reset_metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```python
def reset_metric_publish_frequency_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">metric_publish_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">metrics_endpoint_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds_input`<sup>Optional</sup> <a name="metric_publish_frequency_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```python
metric_publish_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path_input`<sup>Optional</sup> <a name="metrics_endpoint_path_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```python
metrics_endpoint_path_input: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds`<sup>Required</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">put_metrics_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">reset_metrics_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metrics_endpoint` <a name="put_metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```python
def put_metrics_endpoint(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]

---

##### `reset_metrics_endpoint` <a name="reset_metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```python
def reset_metrics_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">metrics_endpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">metrics_endpoint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_endpoint`<sup>Required</sup> <a name="metrics_endpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```python
metrics_endpoint: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `metrics_endpoint_input`<sup>Optional</sup> <a name="metrics_endpoint_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```python
metrics_endpoint_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationsContainerList <a name="SagemakerInferenceComponentSpecificationsContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]

---


### SagemakerInferenceComponentSpecificationsContainerOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig">put_container_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl">reset_artifact_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig">reset_container_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_metrics_config` <a name="put_container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig"></a>

```python
def put_container_metrics_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]

---

##### `reset_artifact_url` <a name="reset_artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl"></a>

```python
def reset_artifact_url() -> None
```

##### `reset_container_metrics_config` <a name="reset_container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig"></a>

```python
def reset_container_metrics_config() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig">container_metrics_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage">resolved_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput">artifact_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput">container_metrics_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl">artifact_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_metrics_config`<sup>Required</sup> <a name="container_metrics_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig"></a>

```python
container_metrics_config: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a>

---

##### `resolved_image`<sup>Required</sup> <a name="resolved_image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage"></a>

```python
resolved_image: str
```

- *Type:* str

---

##### `artifact_url_input`<sup>Optional</sup> <a name="artifact_url_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput"></a>

```python
artifact_url_input: str
```

- *Type:* str

---

##### `container_metrics_config_input`<sup>Optional</sup> <a name="container_metrics_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput"></a>

```python
container_metrics_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `artifact_url`<sup>Required</sup> <a name="artifact_url" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsContainer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput">enable_caching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching_input`<sup>Optional</sup> <a name="enable_caching_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput"></a>

```python
enable_caching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationsList <a name="SagemakerInferenceComponentSpecificationsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>]

---


### SagemakerInferenceComponentSpecificationsOutputReference <a name="SagemakerInferenceComponentSpecificationsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements">put_compute_resource_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig">put_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig">put_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters">put_startup_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName">reset_base_inference_component_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements">reset_compute_resource_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig">reset_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig">reset_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters">reset_startup_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compute_resource_requirements` <a name="put_compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements"></a>

```python
def put_compute_resource_requirements(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsComputeResourceRequirements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]

---

##### `put_container` <a name="put_container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer"></a>

```python
def put_container(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]

---

##### `put_data_cache_config` <a name="put_data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig"></a>

```python
def put_data_cache_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsDataCacheConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]

---

##### `put_scheduling_config` <a name="put_scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig"></a>

```python
def put_scheduling_config(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]

---

##### `put_startup_parameters` <a name="put_startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters"></a>

```python
def put_startup_parameters(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsStartupParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]

---

##### `reset_base_inference_component_name` <a name="reset_base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName"></a>

```python
def reset_base_inference_component_name() -> None
```

##### `reset_compute_resource_requirements` <a name="reset_compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements"></a>

```python
def reset_compute_resource_requirements() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_data_cache_config` <a name="reset_data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig"></a>

```python
def reset_data_cache_config() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_scheduling_config` <a name="reset_scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig"></a>

```python
def reset_scheduling_config() -> None
```

##### `reset_startup_parameters` <a name="reset_startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters"></a>

```python
def reset_startup_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters">startup_parameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput">base_inference_component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput">compute_resource_requirements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput">container_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput">data_cache_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput">scheduling_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput">startup_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName">base_inference_component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_resource_requirements`<sup>Required</sup> <a name="compute_resource_requirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container"></a>

```python
container: SagemakerInferenceComponentSpecificationsContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: SagemakerInferenceComponentSpecificationsDataCacheConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a>

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig"></a>

```python
scheduling_config: SagemakerInferenceComponentSpecificationsSchedulingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a>

---

##### `startup_parameters`<sup>Required</sup> <a name="startup_parameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters"></a>

```python
startup_parameters: SagemakerInferenceComponentSpecificationsStartupParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a>

---

##### `base_inference_component_name_input`<sup>Optional</sup> <a name="base_inference_component_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput"></a>

```python
base_inference_component_name_input: str
```

- *Type:* str

---

##### `compute_resource_requirements_input`<sup>Optional</sup> <a name="compute_resource_requirements_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput"></a>

```python
compute_resource_requirements_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsComputeResourceRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput"></a>

```python
container_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsContainer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>]

---

##### `data_cache_config_input`<sup>Optional</sup> <a name="data_cache_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput"></a>

```python
data_cache_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsDataCacheConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `scheduling_config_input`<sup>Optional</sup> <a name="scheduling_config_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput"></a>

```python
scheduling_config_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]

---

##### `startup_parameters_input`<sup>Optional</sup> <a name="startup_parameters_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput"></a>

```python
startup_parameters_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]

---

##### `base_inference_component_name`<sup>Required</sup> <a name="base_inference_component_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName"></a>

```python
base_inference_component_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">reset_max_imbalance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_imbalance` <a name="reset_max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```python
def reset_max_imbalance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">max_imbalance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `max_imbalance_input`<sup>Optional</sup> <a name="max_imbalance_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```python
max_imbalance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `max_imbalance`<sup>Required</sup> <a name="max_imbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance">put_availability_zone_balance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance">reset_availability_zone_balance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_availability_zone_balance` <a name="put_availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```python
def put_availability_zone_balance(
  value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]

---

##### `reset_availability_zone_balance` <a name="reset_availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```python
def reset_availability_zone_balance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">availability_zone_balance_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput">placement_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_balance`<sup>Required</sup> <a name="availability_zone_balance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `availability_zone_balance_input`<sup>Optional</sup> <a name="availability_zone_balance_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```python
availability_zone_balance_input: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>]

---

##### `placement_strategy_input`<sup>Optional</sup> <a name="placement_strategy_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```python
placement_strategy_input: str
```

- *Type:* str

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsStartupParametersList <a name="SagemakerInferenceComponentSpecificationsStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationsStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationsStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>]

---


### SagemakerInferenceComponentSpecificationsStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationsStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">reset_container_startup_health_check_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">reset_model_data_download_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_startup_health_check_timeout_in_seconds` <a name="reset_container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```python
def reset_container_startup_health_check_timeout_in_seconds() -> None
```

##### `reset_model_data_download_timeout_in_seconds` <a name="reset_model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```python
def reset_model_data_download_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">container_startup_health_check_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">model_data_download_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_startup_health_check_timeout_in_seconds_input`<sup>Optional</sup> <a name="container_startup_health_check_timeout_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```python
container_startup_health_check_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds_input`<sup>Optional</sup> <a name="model_data_download_timeout_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```python
model_data_download_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>

---


### SagemakerInferenceComponentSpecificationStartupParametersList <a name="SagemakerInferenceComponentSpecificationStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceComponentSpecificationStartupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>]

---


### SagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">reset_container_startup_health_check_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">reset_model_data_download_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_startup_health_check_timeout_in_seconds` <a name="reset_container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```python
def reset_container_startup_health_check_timeout_in_seconds() -> None
```

##### `reset_model_data_download_timeout_in_seconds` <a name="reset_model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```python
def reset_model_data_download_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">container_startup_health_check_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">model_data_download_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_startup_health_check_timeout_in_seconds_input`<sup>Optional</sup> <a name="container_startup_health_check_timeout_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```python
container_startup_health_check_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds_input`<sup>Optional</sup> <a name="model_data_download_timeout_in_seconds_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```python
model_data_download_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>

---


### SagemakerInferenceComponentTimeoutsOutputReference <a name="SagemakerInferenceComponentTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_inference_component

sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceComponentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---



