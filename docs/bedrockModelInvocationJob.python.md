# `bedrockModelInvocationJob` Submodule <a name="`bedrockModelInvocationJob` Submodule" id="@cdktn/provider-aws.bedrockModelInvocationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockModelInvocationJob <a name="BedrockModelInvocationJob" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job aws_bedrock_model_invocation_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  job_name: str,
  model_id: str,
  role_arn: str,
  input_data_config: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig] = None,
  output_data_config: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig] = None,
  region: str = None,
  skip_destroy: bool | IResolvable = None,
  timeout_duration_in_hours: typing.Union[int, float] = None,
  timeouts: BedrockModelInvocationJobTimeouts = None,
  vpc_config: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]</code> | input_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.outputDataConfig">output_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]</code> | output_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.skipDestroy">skip_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.timeoutDurationInHours">timeout_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]</code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.inputDataConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#input_data_config BedrockModelInvocationJob#input_data_config}

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.outputDataConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#output_data_config BedrockModelInvocationJob#output_data_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#region BedrockModelInvocationJob#region}

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.skipDestroy"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}.

---

##### `timeout_duration_in_hours`<sup>Optional</sup> <a name="timeout_duration_in_hours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.timeoutDurationInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeouts BedrockModelInvocationJob#timeouts}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.vpcConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#vpc_config BedrockModelInvocationJob#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig">put_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig">reset_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig">reset_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy">reset_skip_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours">reset_timeout_duration_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig"></a>

```python
def put_input_data_config(
  value: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]

---

##### `put_output_data_config` <a name="put_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig"></a>

```python
def put_output_data_config(
  value: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#create BedrockModelInvocationJob#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#delete BedrockModelInvocationJob#delete}

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig"></a>

```python
def put_vpc_config(
  value: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]

---

##### `reset_input_data_config` <a name="reset_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig"></a>

```python
def reset_input_data_config() -> None
```

##### `reset_output_data_config` <a name="reset_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig"></a>

```python
def reset_output_data_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_skip_destroy` <a name="reset_skip_destroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy"></a>

```python
def reset_skip_destroy() -> None
```

##### `reset_timeout_duration_in_hours` <a name="reset_timeout_duration_in_hours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours"></a>

```python
def reset_timeout_duration_in_hours() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockModelInvocationJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockModelInvocationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockModelInvocationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount">error_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn">job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime">job_expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType">model_invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig">output_data_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount">processed_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime">submit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount">success_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount">total_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput">input_data_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput">output_data_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput">skip_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput">timeout_duration_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy">skip_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours">timeout_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error_record_count`<sup>Required</sup> <a name="error_record_count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount"></a>

```python
error_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig"></a>

```python
input_data_config: BedrockModelInvocationJobInputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a>

---

##### `job_arn`<sup>Required</sup> <a name="job_arn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn"></a>

```python
job_arn: str
```

- *Type:* str

---

##### `job_expiration_time`<sup>Required</sup> <a name="job_expiration_time" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime"></a>

```python
job_expiration_time: str
```

- *Type:* str

---

##### `model_invocation_type`<sup>Required</sup> <a name="model_invocation_type" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType"></a>

```python
model_invocation_type: str
```

- *Type:* str

---

##### `output_data_config`<sup>Required</sup> <a name="output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig"></a>

```python
output_data_config: BedrockModelInvocationJobOutputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a>

---

##### `processed_record_count`<sup>Required</sup> <a name="processed_record_count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount"></a>

```python
processed_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `submit_time`<sup>Required</sup> <a name="submit_time" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime"></a>

```python
submit_time: str
```

- *Type:* str

---

##### `success_record_count`<sup>Required</sup> <a name="success_record_count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount"></a>

```python
success_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts"></a>

```python
timeouts: BedrockModelInvocationJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a>

---

##### `total_record_count`<sup>Required</sup> <a name="total_record_count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount"></a>

```python
total_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig"></a>

```python
vpc_config: BedrockModelInvocationJobVpcConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a>

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput"></a>

```python
input_data_config_input: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `output_data_config_input`<sup>Optional</sup> <a name="output_data_config_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput"></a>

```python
output_data_config_input: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `skip_destroy_input`<sup>Optional</sup> <a name="skip_destroy_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput"></a>

```python
skip_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout_duration_in_hours_input`<sup>Optional</sup> <a name="timeout_duration_in_hours_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput"></a>

```python
timeout_duration_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockModelInvocationJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `skip_destroy`<sup>Required</sup> <a name="skip_destroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy"></a>

```python
skip_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout_duration_in_hours`<sup>Required</sup> <a name="timeout_duration_in_hours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours"></a>

```python
timeout_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockModelInvocationJobConfig <a name="BedrockModelInvocationJobConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  job_name: str,
  model_id: str,
  role_arn: str,
  input_data_config: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig] = None,
  output_data_config: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig] = None,
  region: str = None,
  skip_destroy: bool | IResolvable = None,
  timeout_duration_in_hours: typing.Union[int, float] = None,
  timeouts: BedrockModelInvocationJobTimeouts = None,
  vpc_config: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig">input_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]</code> | input_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig">output_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]</code> | output_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy">skip_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours">timeout_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig">vpc_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]</code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig"></a>

```python
input_data_config: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#input_data_config BedrockModelInvocationJob#input_data_config}

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig"></a>

```python
output_data_config: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#output_data_config BedrockModelInvocationJob#output_data_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#region BedrockModelInvocationJob#region}

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy"></a>

```python
skip_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}.

---

##### `timeout_duration_in_hours`<sup>Optional</sup> <a name="timeout_duration_in_hours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours"></a>

```python
timeout_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts"></a>

```python
timeouts: BedrockModelInvocationJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeouts BedrockModelInvocationJob#timeouts}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig"></a>

```python
vpc_config: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#vpc_config BedrockModelInvocationJob#vpc_config}

---

### BedrockModelInvocationJobInputDataConfig <a name="BedrockModelInvocationJobInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig(
  s3_input_data_config: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfigS3InputDataConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig">s3_input_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]</code> | s3_input_data_config block. |

---

##### `s3_input_data_config`<sup>Optional</sup> <a name="s3_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig"></a>

```python
s3_input_data_config: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfigS3InputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]

s3_input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_data_config BedrockModelInvocationJob#s3_input_data_config}

---

### BedrockModelInvocationJobInputDataConfigS3InputDataConfig <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig(
  s3_uri: str,
  s3_bucket_owner: str = None,
  s3_input_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat">s3_input_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `s3_input_format`<sup>Optional</sup> <a name="s3_input_format" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat"></a>

```python
s3_input_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}.

---

### BedrockModelInvocationJobOutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig(
  s3_output_data_config: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig">s3_output_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]</code> | s3_output_data_config block. |

---

##### `s3_output_data_config`<sup>Optional</sup> <a name="s3_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig"></a>

```python
s3_output_data_config: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]

s3_output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_output_data_config BedrockModelInvocationJob#s3_output_data_config}

---

### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig(
  s3_uri: str,
  s3_bucket_owner: str = None,
  s3_encryption_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId">s3_encryption_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `s3_encryption_key_id`<sup>Optional</sup> <a name="s3_encryption_key_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId"></a>

```python
s3_encryption_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}.

---

### BedrockModelInvocationJobTimeouts <a name="BedrockModelInvocationJobTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#create BedrockModelInvocationJob#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#delete BedrockModelInvocationJob#delete}

---

### BedrockModelInvocationJobVpcConfig <a name="BedrockModelInvocationJobVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockModelInvocationJobInputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockModelInvocationJobInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>]

---


### BedrockModelInvocationJobInputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig">put_s3_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig">reset_s3_input_data_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_input_data_config` <a name="put_s3_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig"></a>

```python
def put_s3_input_data_config(
  value: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfigS3InputDataConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]

---

##### `reset_s3_input_data_config` <a name="reset_s3_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig"></a>

```python
def reset_s3_input_data_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig">s3_input_data_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput">s3_input_data_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_input_data_config`<sup>Required</sup> <a name="s3_input_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig"></a>

```python
s3_input_data_config: BedrockModelInvocationJobInputDataConfigS3InputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a>

---

##### `s3_input_data_config_input`<sup>Optional</sup> <a name="s3_input_data_config_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput"></a>

```python
s3_input_data_config_input: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfigS3InputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockModelInvocationJobInputDataConfigS3InputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>]

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner">reset_s3_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat">reset_s3_input_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_owner` <a name="reset_s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner"></a>

```python
def reset_s3_bucket_owner() -> None
```

##### `reset_s3_input_format` <a name="reset_s3_input_format" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat"></a>

```python
def reset_s3_input_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput">s3_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput">s3_input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat">s3_input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_owner_input`<sup>Optional</sup> <a name="s3_bucket_owner_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```python
s3_bucket_owner_input: str
```

- *Type:* str

---

##### `s3_input_format_input`<sup>Optional</sup> <a name="s3_input_format_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput"></a>

```python
s3_input_format_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_input_format`<sup>Required</sup> <a name="s3_input_format" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat"></a>

```python
s3_input_format: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockModelInvocationJobOutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>]

---


### BedrockModelInvocationJobOutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig">put_s3_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig">reset_s3_output_data_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_output_data_config` <a name="put_s3_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig"></a>

```python
def put_s3_output_data_config(
  value: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]

---

##### `reset_s3_output_data_config` <a name="reset_s3_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig"></a>

```python
def reset_s3_output_data_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig">s3_output_data_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput">s3_output_data_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output_data_config`<sup>Required</sup> <a name="s3_output_data_config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig"></a>

```python
s3_output_data_config: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a>

---

##### `s3_output_data_config_input`<sup>Optional</sup> <a name="s3_output_data_config_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput"></a>

```python
s3_output_data_config_input: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobOutputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>]

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner">reset_s3_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId">reset_s3_encryption_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_owner` <a name="reset_s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner"></a>

```python
def reset_s3_bucket_owner() -> None
```

##### `reset_s3_encryption_key_id` <a name="reset_s3_encryption_key_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId"></a>

```python
def reset_s3_encryption_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput">s3_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput">s3_encryption_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId">s3_encryption_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_owner_input`<sup>Optional</sup> <a name="s3_bucket_owner_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```python
s3_bucket_owner_input: str
```

- *Type:* str

---

##### `s3_encryption_key_id_input`<sup>Optional</sup> <a name="s3_encryption_key_id_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput"></a>

```python
s3_encryption_key_id_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_encryption_key_id`<sup>Required</sup> <a name="s3_encryption_key_id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId"></a>

```python
s3_encryption_key_id: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>

---


### BedrockModelInvocationJobTimeoutsOutputReference <a name="BedrockModelInvocationJobTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---


### BedrockModelInvocationJobVpcConfigList <a name="BedrockModelInvocationJobVpcConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockModelInvocationJobVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockModelInvocationJobVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>]

---


### BedrockModelInvocationJobVpcConfigOutputReference <a name="BedrockModelInvocationJobVpcConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_model_invocation_job

bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockModelInvocationJobVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>

---



