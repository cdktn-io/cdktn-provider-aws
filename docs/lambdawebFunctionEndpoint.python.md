# `lambdawebFunctionEndpoint` Submodule <a name="`lambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.lambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionEndpoint <a name="LambdawebFunctionEndpoint" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  endpoint_name: str,
  endpoint_type: str,
  function_name: str,
  auto_deployment_mode: str = None,
  description: str = None,
  region: str = None,
  regions: typing.List[str] = None,
  revision_weight: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight] = None,
  scaling_config: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig] = None,
  throttle_config: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig] = None,
  timeouts: LambdawebFunctionEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.autoDeploymentMode">auto_deployment_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.revisionWeight">revision_weight</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]</code> | revision_weight block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]</code> | scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.throttleConfig">throttle_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]</code> | throttle_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}.

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}.

---

##### `auto_deployment_mode`<sup>Optional</sup> <a name="auto_deployment_mode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.autoDeploymentMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#region LambdawebFunctionEndpoint#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}.

---

##### `revision_weight`<sup>Optional</sup> <a name="revision_weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.revisionWeight"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]

revision_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_weight LambdawebFunctionEndpoint#revision_weight}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scalingConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#scaling_config LambdawebFunctionEndpoint#scaling_config}

---

##### `throttle_config`<sup>Optional</sup> <a name="throttle_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.throttleConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]

throttle_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#throttle_config LambdawebFunctionEndpoint#throttle_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#timeouts LambdawebFunctionEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight">put_revision_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig">put_throttle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode">reset_auto_deployment_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight">reset_revision_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig">reset_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig">reset_throttle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_revision_weight` <a name="put_revision_weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight"></a>

```python
def put_revision_weight(
  value: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig"></a>

```python
def put_scaling_config(
  value: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]

---

##### `put_throttle_config` <a name="put_throttle_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig"></a>

```python
def put_throttle_config(
  value: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#create LambdawebFunctionEndpoint#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#delete LambdawebFunctionEndpoint#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#update LambdawebFunctionEndpoint#update}

---

##### `reset_auto_deployment_mode` <a name="reset_auto_deployment_mode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode"></a>

```python
def reset_auto_deployment_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_revision_weight` <a name="reset_revision_weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight"></a>

```python
def reset_revision_weight() -> None
```

##### `reset_scaling_config` <a name="reset_scaling_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig"></a>

```python
def reset_scaling_config() -> None
```

##### `reset_throttle_config` <a name="reset_throttle_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig"></a>

```python
def reset_throttle_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdawebFunctionEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames">regional_domain_names</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight">revision_weight</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput">auto_deployment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput">revision_weight_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput">scaling_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput">throttle_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode">auto_deployment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `regional_domain_names`<sup>Required</sup> <a name="regional_domain_names" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```python
regional_domain_names: StringMap
```

- *Type:* cdktn.StringMap

---

##### `revision_weight`<sup>Required</sup> <a name="revision_weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight"></a>

```python
revision_weight: LambdawebFunctionEndpointRevisionWeightList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig"></a>

```python
scaling_config: LambdawebFunctionEndpointScalingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a>

---

##### `throttle_config`<sup>Required</sup> <a name="throttle_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig"></a>

```python
throttle_config: LambdawebFunctionEndpointThrottleConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts"></a>

```python
timeouts: LambdawebFunctionEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a>

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auto_deployment_mode_input`<sup>Optional</sup> <a name="auto_deployment_mode_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput"></a>

```python
auto_deployment_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revision_weight_input`<sup>Optional</sup> <a name="revision_weight_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput"></a>

```python
revision_weight_input: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput"></a>

```python
scaling_config_input: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]

---

##### `throttle_config_input`<sup>Optional</sup> <a name="throttle_config_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput"></a>

```python
throttle_config_input: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdawebFunctionEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auto_deployment_mode`<sup>Required</sup> <a name="auto_deployment_mode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```python
auto_deployment_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionEndpointConfig <a name="LambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  endpoint_name: str,
  endpoint_type: str,
  function_name: str,
  auto_deployment_mode: str = None,
  description: str = None,
  region: str = None,
  regions: typing.List[str] = None,
  revision_weight: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight] = None,
  scaling_config: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig] = None,
  throttle_config: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig] = None,
  timeouts: LambdawebFunctionEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode">auto_deployment_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight">revision_weight</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]</code> | revision_weight block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig">scaling_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]</code> | scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig">throttle_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]</code> | throttle_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}.

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}.

---

##### `auto_deployment_mode`<sup>Optional</sup> <a name="auto_deployment_mode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode"></a>

```python
auto_deployment_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#region LambdawebFunctionEndpoint#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}.

---

##### `revision_weight`<sup>Optional</sup> <a name="revision_weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight"></a>

```python
revision_weight: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]

revision_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_weight LambdawebFunctionEndpoint#revision_weight}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig"></a>

```python
scaling_config: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#scaling_config LambdawebFunctionEndpoint#scaling_config}

---

##### `throttle_config`<sup>Optional</sup> <a name="throttle_config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig"></a>

```python
throttle_config: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]

throttle_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#throttle_config LambdawebFunctionEndpoint#throttle_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts"></a>

```python
timeouts: LambdawebFunctionEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#timeouts LambdawebFunctionEndpoint#timeouts}

---

### LambdawebFunctionEndpointRevisionWeight <a name="LambdawebFunctionEndpointRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight(
  revision_id: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId">revision_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}. |

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}.

---

### LambdawebFunctionEndpointScalingConfig <a name="LambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig(
  max_environments: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}. |

---

##### `max_environments`<sup>Required</sup> <a name="max_environments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}.

---

### LambdawebFunctionEndpointThrottleConfig <a name="LambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig(
  rate_limit: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}. |

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}.

---

### LambdawebFunctionEndpointTimeouts <a name="LambdawebFunctionEndpointTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#create LambdawebFunctionEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#delete LambdawebFunctionEndpoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#update LambdawebFunctionEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionEndpointRevisionWeightList <a name="LambdawebFunctionEndpointRevisionWeightList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionEndpointRevisionWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionEndpointRevisionWeight]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>]

---


### LambdawebFunctionEndpointRevisionWeightOutputReference <a name="LambdawebFunctionEndpointRevisionWeightOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput">revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_id_input`<sup>Optional</sup> <a name="revision_id_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput"></a>

```python
revision_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionEndpointRevisionWeight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>

---


### LambdawebFunctionEndpointScalingConfigList <a name="LambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionEndpointScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionEndpointScalingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>]

---


### LambdawebFunctionEndpointScalingConfigOutputReference <a name="LambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">max_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_environments_input`<sup>Optional</sup> <a name="max_environments_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```python
max_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_environments`<sup>Required</sup> <a name="max_environments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionEndpointScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>

---


### LambdawebFunctionEndpointThrottleConfigList <a name="LambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionEndpointThrottleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionEndpointThrottleConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>]

---


### LambdawebFunctionEndpointThrottleConfigOutputReference <a name="LambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionEndpointThrottleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>

---


### LambdawebFunctionEndpointTimeoutsOutputReference <a name="LambdawebFunctionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_endpoint

lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---



