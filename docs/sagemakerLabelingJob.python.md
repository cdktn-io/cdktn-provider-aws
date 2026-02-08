# `sagemakerLabelingJob` Submodule <a name="`sagemakerLabelingJob` Submodule" id="@cdktn/provider-aws.sagemakerLabelingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerLabelingJob <a name="SagemakerLabelingJob" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  label_attribute_name: str,
  labeling_job_name: str,
  role_arn: str,
  human_task_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig] = None,
  input_config: IResolvable | typing.List[SagemakerLabelingJobInputConfig] = None,
  label_category_config_s3_uri: str = None,
  labeling_job_algorithms_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig] = None,
  output_config: IResolvable | typing.List[SagemakerLabelingJobOutputConfig] = None,
  region: str = None,
  stopping_conditions: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelAttributeName">label_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobName">labeling_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.humanTaskConfig">human_task_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]</code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.inputConfig">input_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]</code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelCategoryConfigS3Uri">label_category_config_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobAlgorithmsConfig">labeling_job_algorithms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]</code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.outputConfig">output_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]</code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.stoppingConditions">stopping_conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `label_attribute_name`<sup>Required</sup> <a name="label_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelAttributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `labeling_job_name`<sup>Required</sup> <a name="labeling_job_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `human_task_config`<sup>Optional</sup> <a name="human_task_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.humanTaskConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `input_config`<sup>Optional</sup> <a name="input_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.inputConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `label_category_config_s3_uri`<sup>Optional</sup> <a name="label_category_config_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelCategoryConfigS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `labeling_job_algorithms_config`<sup>Optional</sup> <a name="labeling_job_algorithms_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobAlgorithmsConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `output_config`<sup>Optional</sup> <a name="output_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.outputConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `stopping_conditions`<sup>Optional</sup> <a name="stopping_conditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.stoppingConditions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig">put_human_task_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig">put_input_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig">put_labeling_job_algorithms_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig">put_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions">put_stopping_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig">reset_human_task_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig">reset_input_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri">reset_label_category_config_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig">reset_labeling_job_algorithms_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig">reset_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions">reset_stopping_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_human_task_config` <a name="put_human_task_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig"></a>

```python
def put_human_task_config(
  value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]

---

##### `put_input_config` <a name="put_input_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig"></a>

```python
def put_input_config(
  value: IResolvable | typing.List[SagemakerLabelingJobInputConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]

---

##### `put_labeling_job_algorithms_config` <a name="put_labeling_job_algorithms_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig"></a>

```python
def put_labeling_job_algorithms_config(
  value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]

---

##### `put_output_config` <a name="put_output_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig"></a>

```python
def put_output_config(
  value: IResolvable | typing.List[SagemakerLabelingJobOutputConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]

---

##### `put_stopping_conditions` <a name="put_stopping_conditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions"></a>

```python
def put_stopping_conditions(
  value: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]

---

##### `reset_human_task_config` <a name="reset_human_task_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig"></a>

```python
def reset_human_task_config() -> None
```

##### `reset_input_config` <a name="reset_input_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig"></a>

```python
def reset_input_config() -> None
```

##### `reset_label_category_config_s3_uri` <a name="reset_label_category_config_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri"></a>

```python
def reset_label_category_config_s3_uri() -> None
```

##### `reset_labeling_job_algorithms_config` <a name="reset_labeling_job_algorithms_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig"></a>

```python
def reset_labeling_job_algorithms_config() -> None
```

##### `reset_output_config` <a name="reset_output_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig"></a>

```python
def reset_output_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_stopping_conditions` <a name="reset_stopping_conditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions"></a>

```python
def reset_stopping_conditions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SagemakerLabelingJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SagemakerLabelingJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerLabelingJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerLabelingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerLabelingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig">human_task_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig">input_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode">job_reference_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters">label_counters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig">labeling_job_algorithms_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn">labeling_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus">labeling_job_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions">stopping_conditions</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput">human_task_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput">input_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput">label_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput">label_category_config_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput">labeling_job_algorithms_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput">labeling_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput">output_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput">stopping_conditions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName">label_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri">label_category_config_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName">labeling_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `human_task_config`<sup>Required</sup> <a name="human_task_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig"></a>

```python
human_task_config: SagemakerLabelingJobHumanTaskConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a>

---

##### `input_config`<sup>Required</sup> <a name="input_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig"></a>

```python
input_config: SagemakerLabelingJobInputConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a>

---

##### `job_reference_code`<sup>Required</sup> <a name="job_reference_code" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode"></a>

```python
job_reference_code: str
```

- *Type:* str

---

##### `label_counters`<sup>Required</sup> <a name="label_counters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters"></a>

```python
label_counters: SagemakerLabelingJobLabelCountersList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a>

---

##### `labeling_job_algorithms_config`<sup>Required</sup> <a name="labeling_job_algorithms_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig"></a>

```python
labeling_job_algorithms_config: SagemakerLabelingJobLabelingJobAlgorithmsConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a>

---

##### `labeling_job_arn`<sup>Required</sup> <a name="labeling_job_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn"></a>

```python
labeling_job_arn: str
```

- *Type:* str

---

##### `labeling_job_status`<sup>Required</sup> <a name="labeling_job_status" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus"></a>

```python
labeling_job_status: str
```

- *Type:* str

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig"></a>

```python
output_config: SagemakerLabelingJobOutputConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a>

---

##### `stopping_conditions`<sup>Required</sup> <a name="stopping_conditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions"></a>

```python
stopping_conditions: SagemakerLabelingJobStoppingConditionsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `human_task_config_input`<sup>Optional</sup> <a name="human_task_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput"></a>

```python
human_task_config_input: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]

---

##### `input_config_input`<sup>Optional</sup> <a name="input_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput"></a>

```python
input_config_input: IResolvable | typing.List[SagemakerLabelingJobInputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]

---

##### `label_attribute_name_input`<sup>Optional</sup> <a name="label_attribute_name_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput"></a>

```python
label_attribute_name_input: str
```

- *Type:* str

---

##### `label_category_config_s3_uri_input`<sup>Optional</sup> <a name="label_category_config_s3_uri_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput"></a>

```python
label_category_config_s3_uri_input: str
```

- *Type:* str

---

##### `labeling_job_algorithms_config_input`<sup>Optional</sup> <a name="labeling_job_algorithms_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput"></a>

```python
labeling_job_algorithms_config_input: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]

---

##### `labeling_job_name_input`<sup>Optional</sup> <a name="labeling_job_name_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput"></a>

```python
labeling_job_name_input: str
```

- *Type:* str

---

##### `output_config_input`<sup>Optional</sup> <a name="output_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput"></a>

```python
output_config_input: IResolvable | typing.List[SagemakerLabelingJobOutputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stopping_conditions_input`<sup>Optional</sup> <a name="stopping_conditions_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput"></a>

```python
stopping_conditions_input: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `label_attribute_name`<sup>Required</sup> <a name="label_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName"></a>

```python
label_attribute_name: str
```

- *Type:* str

---

##### `label_category_config_s3_uri`<sup>Required</sup> <a name="label_category_config_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri"></a>

```python
label_category_config_s3_uri: str
```

- *Type:* str

---

##### `labeling_job_name`<sup>Required</sup> <a name="labeling_job_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName"></a>

```python
labeling_job_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerLabelingJobConfig <a name="SagemakerLabelingJobConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  label_attribute_name: str,
  labeling_job_name: str,
  role_arn: str,
  human_task_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig] = None,
  input_config: IResolvable | typing.List[SagemakerLabelingJobInputConfig] = None,
  label_category_config_s3_uri: str = None,
  labeling_job_algorithms_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig] = None,
  output_config: IResolvable | typing.List[SagemakerLabelingJobOutputConfig] = None,
  region: str = None,
  stopping_conditions: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName">label_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName">labeling_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig">human_task_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]</code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig">input_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]</code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri">label_category_config_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig">labeling_job_algorithms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]</code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig">output_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]</code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions">stopping_conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `label_attribute_name`<sup>Required</sup> <a name="label_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName"></a>

```python
label_attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `labeling_job_name`<sup>Required</sup> <a name="labeling_job_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName"></a>

```python
labeling_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `human_task_config`<sup>Optional</sup> <a name="human_task_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig"></a>

```python
human_task_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `input_config`<sup>Optional</sup> <a name="input_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig"></a>

```python
input_config: IResolvable | typing.List[SagemakerLabelingJobInputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `label_category_config_s3_uri`<sup>Optional</sup> <a name="label_category_config_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri"></a>

```python
label_category_config_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `labeling_job_algorithms_config`<sup>Optional</sup> <a name="labeling_job_algorithms_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig"></a>

```python
labeling_job_algorithms_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `output_config`<sup>Optional</sup> <a name="output_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig"></a>

```python
output_config: IResolvable | typing.List[SagemakerLabelingJobOutputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `stopping_conditions`<sup>Optional</sup> <a name="stopping_conditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions"></a>

```python
stopping_conditions: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

### SagemakerLabelingJobHumanTaskConfig <a name="SagemakerLabelingJobHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig(
  number_of_human_workers_per_data_object: typing.Union[int, float],
  task_description: str,
  task_time_limit_in_seconds: typing.Union[int, float],
  task_title: str,
  workteam_arn: str,
  annotation_consolidation_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig] = None,
  max_concurrent_task_count: typing.Union[int, float] = None,
  pre_human_task_lambda_arn: str = None,
  public_workforce_task_price: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice] = None,
  task_availability_lifetime_in_seconds: typing.Union[int, float] = None,
  task_keywords: typing.List[str] = None,
  ui_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigUiConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject">number_of_human_workers_per_data_object</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription">task_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds">task_time_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle">task_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn">workteam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig">annotation_consolidation_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]</code> | annotation_consolidation_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount">max_concurrent_task_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn">pre_human_task_lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice">public_workforce_task_price</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]</code> | public_workforce_task_price block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds">task_availability_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords">task_keywords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig">ui_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]</code> | ui_config block. |

---

##### `number_of_human_workers_per_data_object`<sup>Required</sup> <a name="number_of_human_workers_per_data_object" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject"></a>

```python
number_of_human_workers_per_data_object: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}.

---

##### `task_description`<sup>Required</sup> <a name="task_description" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription"></a>

```python
task_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}.

---

##### `task_time_limit_in_seconds`<sup>Required</sup> <a name="task_time_limit_in_seconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds"></a>

```python
task_time_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}.

---

##### `task_title`<sup>Required</sup> <a name="task_title" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle"></a>

```python
task_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}.

---

##### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn"></a>

```python
workteam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}.

---

##### `annotation_consolidation_config`<sup>Optional</sup> <a name="annotation_consolidation_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig"></a>

```python
annotation_consolidation_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]

annotation_consolidation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config SagemakerLabelingJob#annotation_consolidation_config}

---

##### `max_concurrent_task_count`<sup>Optional</sup> <a name="max_concurrent_task_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount"></a>

```python
max_concurrent_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}.

---

##### `pre_human_task_lambda_arn`<sup>Optional</sup> <a name="pre_human_task_lambda_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn"></a>

```python
pre_human_task_lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}.

---

##### `public_workforce_task_price`<sup>Optional</sup> <a name="public_workforce_task_price" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice"></a>

```python
public_workforce_task_price: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price SagemakerLabelingJob#public_workforce_task_price}

---

##### `task_availability_lifetime_in_seconds`<sup>Optional</sup> <a name="task_availability_lifetime_in_seconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```python
task_availability_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}.

---

##### `task_keywords`<sup>Optional</sup> <a name="task_keywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords"></a>

```python
task_keywords: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}.

---

##### `ui_config`<sup>Optional</sup> <a name="ui_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig"></a>

```python
ui_config: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigUiConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]

ui_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_config SagemakerLabelingJob#ui_config}

---

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig(
  annotation_consolidation_lambda_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn">annotation_consolidation_lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}. |

---

##### `annotation_consolidation_lambda_arn`<sup>Required</sup> <a name="annotation_consolidation_lambda_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn"></a>

```python
annotation_consolidation_lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}.

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice(
  amount_in_usd: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd">amount_in_usd</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]</code> | amount_in_usd block. |

---

##### `amount_in_usd`<sup>Optional</sup> <a name="amount_in_usd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```python
amount_in_usd: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]

amount_in_usd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#amount_in_usd SagemakerLabelingJob#amount_in_usd}

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd(
  cents: typing.Union[int, float] = None,
  dollars: typing.Union[int, float] = None,
  tenth_fractions_of_a_cent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenth_fractions_of_a_cent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```python
cents: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```python
dollars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}.

---

##### `tenth_fractions_of_a_cent`<sup>Optional</sup> <a name="tenth_fractions_of_a_cent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```python
tenth_fractions_of_a_cent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}.

---

### SagemakerLabelingJobHumanTaskConfigUiConfig <a name="SagemakerLabelingJobHumanTaskConfigUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig(
  human_task_ui_arn: str = None,
  ui_template_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn">human_task_ui_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri">ui_template_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}. |

---

##### `human_task_ui_arn`<sup>Optional</sup> <a name="human_task_ui_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn"></a>

```python
human_task_ui_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}.

---

##### `ui_template_s3_uri`<sup>Optional</sup> <a name="ui_template_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri"></a>

```python
ui_template_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}.

---

### SagemakerLabelingJobInputConfig <a name="SagemakerLabelingJobInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfig(
  data_attributes: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataAttributes] = None,
  data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSource] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes">data_attributes</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]</code> | data_attributes block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource">data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]</code> | data_source block. |

---

##### `data_attributes`<sup>Optional</sup> <a name="data_attributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes"></a>

```python
data_attributes: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataAttributes]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]

data_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_attributes SagemakerLabelingJob#data_attributes}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource"></a>

```python
data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_source SagemakerLabelingJob#data_source}

---

### SagemakerLabelingJobInputConfigDataAttributes <a name="SagemakerLabelingJobInputConfigDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes(
  content_classifiers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers">content_classifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}. |

---

##### `content_classifiers`<sup>Optional</sup> <a name="content_classifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers"></a>

```python
content_classifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}.

---

### SagemakerLabelingJobInputConfigDataSource <a name="SagemakerLabelingJobInputConfigDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource(
  s3_data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceS3DataSource] = None,
  sns_data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceSnsDataSource] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource">s3_data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]</code> | s3_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource">sns_data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]</code> | sns_data_source block. |

---

##### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource"></a>

```python
s3_data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceS3DataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_data_source SagemakerLabelingJob#s3_data_source}

---

##### `sns_data_source`<sup>Optional</sup> <a name="sns_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource"></a>

```python
sns_data_source: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceSnsDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]

sns_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_data_source SagemakerLabelingJob#sns_data_source}

---

### SagemakerLabelingJobInputConfigDataSourceS3DataSource <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource(
  manifest_s3_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri">manifest_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}. |

---

##### `manifest_s3_uri`<sup>Required</sup> <a name="manifest_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri"></a>

```python
manifest_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}.

---

### SagemakerLabelingJobInputConfigDataSourceSnsDataSource <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource(
  sns_topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobLabelCounters <a name="SagemakerLabelingJobLabelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelCounters()
```


### SagemakerLabelingJobLabelingJobAlgorithmsConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig(
  labeling_job_algorithm_specification_arn: str,
  initial_active_learning_model_arn: str = None,
  labeling_job_resource_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn">labeling_job_algorithm_specification_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn">initial_active_learning_model_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig">labeling_job_resource_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]</code> | labeling_job_resource_config block. |

---

##### `labeling_job_algorithm_specification_arn`<sup>Required</sup> <a name="labeling_job_algorithm_specification_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn"></a>

```python
labeling_job_algorithm_specification_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}.

---

##### `initial_active_learning_model_arn`<sup>Optional</sup> <a name="initial_active_learning_model_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn"></a>

```python
initial_active_learning_model_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}.

---

##### `labeling_job_resource_config`<sup>Optional</sup> <a name="labeling_job_resource_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig"></a>

```python
labeling_job_resource_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]

labeling_job_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config SagemakerLabelingJob#labeling_job_resource_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig(
  volume_kms_key_id: str = None,
  vpc_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig">vpc_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]</code> | vpc_config block. |

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig"></a>

```python
vpc_config: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#vpc_config SagemakerLabelingJob#vpc_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig(
  security_group_ids: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}.

---

### SagemakerLabelingJobOutputConfig <a name="SagemakerLabelingJobOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobOutputConfig(
  s3_output_path: str,
  kms_key_id: str = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobStoppingConditions <a name="SagemakerLabelingJobStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions(
  max_human_labeled_object_count: typing.Union[int, float] = None,
  max_percentage_of_input_dataset_labeled: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount">max_human_labeled_object_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled">max_percentage_of_input_dataset_labeled</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}. |

---

##### `max_human_labeled_object_count`<sup>Optional</sup> <a name="max_human_labeled_object_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount"></a>

```python
max_human_labeled_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}.

---

##### `max_percentage_of_input_dataset_labeled`<sup>Optional</sup> <a name="max_percentage_of_input_dataset_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled"></a>

```python
max_percentage_of_input_dataset_labeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]

---


### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput">annotation_consolidation_lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn">annotation_consolidation_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_consolidation_lambda_arn_input`<sup>Optional</sup> <a name="annotation_consolidation_lambda_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput"></a>

```python
annotation_consolidation_lambda_arn_input: str
```

- *Type:* str

---

##### `annotation_consolidation_lambda_arn`<sup>Required</sup> <a name="annotation_consolidation_lambda_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn"></a>

```python
annotation_consolidation_lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigList <a name="SagemakerLabelingJobHumanTaskConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobHumanTaskConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>]

---


### SagemakerLabelingJobHumanTaskConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig">put_annotation_consolidation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice">put_public_workforce_task_price</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig">put_ui_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig">reset_annotation_consolidation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount">reset_max_concurrent_task_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn">reset_pre_human_task_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice">reset_public_workforce_task_price</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">reset_task_availability_lifetime_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords">reset_task_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig">reset_ui_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_annotation_consolidation_config` <a name="put_annotation_consolidation_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig"></a>

```python
def put_annotation_consolidation_config(
  value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]

---

##### `put_public_workforce_task_price` <a name="put_public_workforce_task_price" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```python
def put_public_workforce_task_price(
  value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]

---

##### `put_ui_config` <a name="put_ui_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig"></a>

```python
def put_ui_config(
  value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigUiConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]

---

##### `reset_annotation_consolidation_config` <a name="reset_annotation_consolidation_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig"></a>

```python
def reset_annotation_consolidation_config() -> None
```

##### `reset_max_concurrent_task_count` <a name="reset_max_concurrent_task_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount"></a>

```python
def reset_max_concurrent_task_count() -> None
```

##### `reset_pre_human_task_lambda_arn` <a name="reset_pre_human_task_lambda_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn"></a>

```python
def reset_pre_human_task_lambda_arn() -> None
```

##### `reset_public_workforce_task_price` <a name="reset_public_workforce_task_price" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```python
def reset_public_workforce_task_price() -> None
```

##### `reset_task_availability_lifetime_in_seconds` <a name="reset_task_availability_lifetime_in_seconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```python
def reset_task_availability_lifetime_in_seconds() -> None
```

##### `reset_task_keywords` <a name="reset_task_keywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords"></a>

```python
def reset_task_keywords() -> None
```

##### `reset_ui_config` <a name="reset_ui_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig"></a>

```python
def reset_ui_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig">annotation_consolidation_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice">public_workforce_task_price</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig">ui_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput">annotation_consolidation_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput">max_concurrent_task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput">number_of_human_workers_per_data_object_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput">pre_human_task_lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput">public_workforce_task_price_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">task_availability_lifetime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput">task_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput">task_keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput">task_time_limit_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput">task_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput">ui_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput">workteam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount">max_concurrent_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject">number_of_human_workers_per_data_object</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn">pre_human_task_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">task_availability_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription">task_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords">task_keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds">task_time_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle">task_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn">workteam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_consolidation_config`<sup>Required</sup> <a name="annotation_consolidation_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig"></a>

```python
annotation_consolidation_config: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a>

---

##### `public_workforce_task_price`<sup>Required</sup> <a name="public_workforce_task_price" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```python
public_workforce_task_price: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a>

---

##### `ui_config`<sup>Required</sup> <a name="ui_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig"></a>

```python
ui_config: SagemakerLabelingJobHumanTaskConfigUiConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a>

---

##### `annotation_consolidation_config_input`<sup>Optional</sup> <a name="annotation_consolidation_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput"></a>

```python
annotation_consolidation_config_input: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>]

---

##### `max_concurrent_task_count_input`<sup>Optional</sup> <a name="max_concurrent_task_count_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput"></a>

```python
max_concurrent_task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_human_workers_per_data_object_input`<sup>Optional</sup> <a name="number_of_human_workers_per_data_object_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput"></a>

```python
number_of_human_workers_per_data_object_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_human_task_lambda_arn_input`<sup>Optional</sup> <a name="pre_human_task_lambda_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput"></a>

```python
pre_human_task_lambda_arn_input: str
```

- *Type:* str

---

##### `public_workforce_task_price_input`<sup>Optional</sup> <a name="public_workforce_task_price_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```python
public_workforce_task_price_input: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]

---

##### `task_availability_lifetime_in_seconds_input`<sup>Optional</sup> <a name="task_availability_lifetime_in_seconds_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```python
task_availability_lifetime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_description_input`<sup>Optional</sup> <a name="task_description_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput"></a>

```python
task_description_input: str
```

- *Type:* str

---

##### `task_keywords_input`<sup>Optional</sup> <a name="task_keywords_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput"></a>

```python
task_keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_time_limit_in_seconds_input`<sup>Optional</sup> <a name="task_time_limit_in_seconds_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```python
task_time_limit_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_title_input`<sup>Optional</sup> <a name="task_title_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput"></a>

```python
task_title_input: str
```

- *Type:* str

---

##### `ui_config_input`<sup>Optional</sup> <a name="ui_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput"></a>

```python
ui_config_input: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigUiConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]

---

##### `workteam_arn_input`<sup>Optional</sup> <a name="workteam_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput"></a>

```python
workteam_arn_input: str
```

- *Type:* str

---

##### `max_concurrent_task_count`<sup>Required</sup> <a name="max_concurrent_task_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount"></a>

```python
max_concurrent_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_human_workers_per_data_object`<sup>Required</sup> <a name="number_of_human_workers_per_data_object" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject"></a>

```python
number_of_human_workers_per_data_object: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_human_task_lambda_arn`<sup>Required</sup> <a name="pre_human_task_lambda_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn"></a>

```python
pre_human_task_lambda_arn: str
```

- *Type:* str

---

##### `task_availability_lifetime_in_seconds`<sup>Required</sup> <a name="task_availability_lifetime_in_seconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```python
task_availability_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_description`<sup>Required</sup> <a name="task_description" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription"></a>

```python
task_description: str
```

- *Type:* str

---

##### `task_keywords`<sup>Required</sup> <a name="task_keywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords"></a>

```python
task_keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_time_limit_in_seconds`<sup>Required</sup> <a name="task_time_limit_in_seconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```python
task_time_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_title`<sup>Required</sup> <a name="task_title" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle"></a>

```python
task_title: str
```

- *Type:* str

---

##### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn"></a>

```python
workteam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobHumanTaskConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">reset_cents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">reset_dollars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">reset_tenth_fractions_of_a_cent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cents` <a name="reset_cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```python
def reset_cents() -> None
```

##### `reset_dollars` <a name="reset_dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```python
def reset_dollars() -> None
```

##### `reset_tenth_fractions_of_a_cent` <a name="reset_tenth_fractions_of_a_cent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```python
def reset_tenth_fractions_of_a_cent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">cents_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenth_fractions_of_a_cent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenth_fractions_of_a_cent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cents_input`<sup>Optional</sup> <a name="cents_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```python
cents_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dollars_input`<sup>Optional</sup> <a name="dollars_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```python
dollars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenth_fractions_of_a_cent_input`<sup>Optional</sup> <a name="tenth_fractions_of_a_cent_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```python
tenth_fractions_of_a_cent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```python
cents: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```python
dollars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenth_fractions_of_a_cent`<sup>Required</sup> <a name="tenth_fractions_of_a_cent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```python
tenth_fractions_of_a_cent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">put_amount_in_usd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">reset_amount_in_usd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amount_in_usd` <a name="put_amount_in_usd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```python
def put_amount_in_usd(
  value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]

---

##### `reset_amount_in_usd` <a name="reset_amount_in_usd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```python
def reset_amount_in_usd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amount_in_usd</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amount_in_usd_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_in_usd`<sup>Required</sup> <a name="amount_in_usd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```python
amount_in_usd: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a>

---

##### `amount_in_usd_input`<sup>Optional</sup> <a name="amount_in_usd_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```python
amount_in_usd_input: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>

---


### SagemakerLabelingJobHumanTaskConfigUiConfigList <a name="SagemakerLabelingJobHumanTaskConfigUiConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobHumanTaskConfigUiConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>]

---


### SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn">reset_human_task_ui_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri">reset_ui_template_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_human_task_ui_arn` <a name="reset_human_task_ui_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn"></a>

```python
def reset_human_task_ui_arn() -> None
```

##### `reset_ui_template_s3_uri` <a name="reset_ui_template_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri"></a>

```python
def reset_ui_template_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput">human_task_ui_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput">ui_template_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn">human_task_ui_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri">ui_template_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `human_task_ui_arn_input`<sup>Optional</sup> <a name="human_task_ui_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput"></a>

```python
human_task_ui_arn_input: str
```

- *Type:* str

---

##### `ui_template_s3_uri_input`<sup>Optional</sup> <a name="ui_template_s3_uri_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput"></a>

```python
ui_template_s3_uri_input: str
```

- *Type:* str

---

##### `human_task_ui_arn`<sup>Required</sup> <a name="human_task_ui_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn"></a>

```python
human_task_ui_arn: str
```

- *Type:* str

---

##### `ui_template_s3_uri`<sup>Required</sup> <a name="ui_template_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri"></a>

```python
ui_template_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>

---


### SagemakerLabelingJobInputConfigDataAttributesList <a name="SagemakerLabelingJobInputConfigDataAttributesList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobInputConfigDataAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataAttributes]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]

---


### SagemakerLabelingJobInputConfigDataAttributesOutputReference <a name="SagemakerLabelingJobInputConfigDataAttributesOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers">reset_content_classifiers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_classifiers` <a name="reset_content_classifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers"></a>

```python
def reset_content_classifiers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput">content_classifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers">content_classifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_classifiers_input`<sup>Optional</sup> <a name="content_classifiers_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput"></a>

```python
content_classifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_classifiers`<sup>Required</sup> <a name="content_classifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers"></a>

```python
content_classifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobInputConfigDataAttributes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>

---


### SagemakerLabelingJobInputConfigDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobInputConfigDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]

---


### SagemakerLabelingJobInputConfigDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource">put_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource">put_sns_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource">reset_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource">reset_sns_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_data_source` <a name="put_s3_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource"></a>

```python
def put_s3_data_source(
  value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceS3DataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]

---

##### `put_sns_data_source` <a name="put_sns_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource"></a>

```python
def put_sns_data_source(
  value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceSnsDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]

---

##### `reset_s3_data_source` <a name="reset_s3_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource"></a>

```python
def reset_s3_data_source() -> None
```

##### `reset_sns_data_source` <a name="reset_sns_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource"></a>

```python
def reset_sns_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource">sns_data_source</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput">s3_data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput">sns_data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource"></a>

```python
s3_data_source: SagemakerLabelingJobInputConfigDataSourceS3DataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a>

---

##### `sns_data_source`<sup>Required</sup> <a name="sns_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource"></a>

```python
sns_data_source: SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a>

---

##### `s3_data_source_input`<sup>Optional</sup> <a name="s3_data_source_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```python
s3_data_source_input: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceS3DataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]

---

##### `sns_data_source_input`<sup>Optional</sup> <a name="sns_data_source_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput"></a>

```python
sns_data_source_input: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceSnsDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobInputConfigDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceS3DataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>]

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput">manifest_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri">manifest_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_s3_uri_input`<sup>Optional</sup> <a name="manifest_s3_uri_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput"></a>

```python
manifest_s3_uri_input: str
```

- *Type:* str

---

##### `manifest_s3_uri`<sup>Required</sup> <a name="manifest_s3_uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri"></a>

```python
manifest_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSourceSnsDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>]

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>

---


### SagemakerLabelingJobInputConfigList <a name="SagemakerLabelingJobInputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobInputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobInputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>]

---


### SagemakerLabelingJobInputConfigOutputReference <a name="SagemakerLabelingJobInputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes">put_data_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes">reset_data_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_attributes` <a name="put_data_attributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes"></a>

```python
def put_data_attributes(
  value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]

---

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource"></a>

```python
def put_data_source(
  value: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]

---

##### `reset_data_attributes` <a name="reset_data_attributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes"></a>

```python
def reset_data_attributes() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes">data_attributes</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput">data_attributes_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_attributes`<sup>Required</sup> <a name="data_attributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes"></a>

```python
data_attributes: SagemakerLabelingJobInputConfigDataAttributesList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a>

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource"></a>

```python
data_source: SagemakerLabelingJobInputConfigDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a>

---

##### `data_attributes_input`<sup>Optional</sup> <a name="data_attributes_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput"></a>

```python
data_attributes_input: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataAttributes]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | typing.List[SagemakerLabelingJobInputConfigDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobInputConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>

---


### SagemakerLabelingJobLabelCountersList <a name="SagemakerLabelingJobLabelCountersList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobLabelCountersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SagemakerLabelingJobLabelCountersOutputReference <a name="SagemakerLabelingJobLabelCountersOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError">failed_non_retryable_error</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled">human_labeled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled">machine_labeled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled">total_labeled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled">unlabeled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failed_non_retryable_error`<sup>Required</sup> <a name="failed_non_retryable_error" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError"></a>

```python
failed_non_retryable_error: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `human_labeled`<sup>Required</sup> <a name="human_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled"></a>

```python
human_labeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `machine_labeled`<sup>Required</sup> <a name="machine_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled"></a>

```python
machine_labeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_labeled`<sup>Required</sup> <a name="total_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled"></a>

```python
total_labeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlabeled`<sup>Required</sup> <a name="unlabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled"></a>

```python
unlabeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerLabelingJobLabelCounters
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]

---

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a>

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig">put_labeling_job_resource_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn">reset_initial_active_learning_model_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig">reset_labeling_job_resource_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labeling_job_resource_config` <a name="put_labeling_job_resource_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig"></a>

```python
def put_labeling_job_resource_config(
  value: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]

---

##### `reset_initial_active_learning_model_arn` <a name="reset_initial_active_learning_model_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn"></a>

```python
def reset_initial_active_learning_model_arn() -> None
```

##### `reset_labeling_job_resource_config` <a name="reset_labeling_job_resource_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig"></a>

```python
def reset_labeling_job_resource_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig">labeling_job_resource_config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput">initial_active_learning_model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput">labeling_job_algorithm_specification_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput">labeling_job_resource_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn">initial_active_learning_model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn">labeling_job_algorithm_specification_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labeling_job_resource_config`<sup>Required</sup> <a name="labeling_job_resource_config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig"></a>

```python
labeling_job_resource_config: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a>

---

##### `initial_active_learning_model_arn_input`<sup>Optional</sup> <a name="initial_active_learning_model_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput"></a>

```python
initial_active_learning_model_arn_input: str
```

- *Type:* str

---

##### `labeling_job_algorithm_specification_arn_input`<sup>Optional</sup> <a name="labeling_job_algorithm_specification_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput"></a>

```python
labeling_job_algorithm_specification_arn_input: str
```

- *Type:* str

---

##### `labeling_job_resource_config_input`<sup>Optional</sup> <a name="labeling_job_resource_config_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput"></a>

```python
labeling_job_resource_config_input: IResolvable | typing.List[SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>]

---

##### `initial_active_learning_model_arn`<sup>Required</sup> <a name="initial_active_learning_model_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn"></a>

```python
initial_active_learning_model_arn: str
```

- *Type:* str

---

##### `labeling_job_algorithm_specification_arn`<sup>Required</sup> <a name="labeling_job_algorithm_specification_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn"></a>

```python
labeling_job_algorithm_specification_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>

---


### SagemakerLabelingJobOutputConfigList <a name="SagemakerLabelingJobOutputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobOutputConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>]

---


### SagemakerLabelingJobOutputConfigOutputReference <a name="SagemakerLabelingJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput">s3_output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_output_path_input`<sup>Optional</sup> <a name="s3_output_path_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```python
s3_output_path_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobOutputConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>

---


### SagemakerLabelingJobStoppingConditionsList <a name="SagemakerLabelingJobStoppingConditionsList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerLabelingJobStoppingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerLabelingJobStoppingConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>]

---


### SagemakerLabelingJobStoppingConditionsOutputReference <a name="SagemakerLabelingJobStoppingConditionsOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_labeling_job

sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount">reset_max_human_labeled_object_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled">reset_max_percentage_of_input_dataset_labeled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_human_labeled_object_count` <a name="reset_max_human_labeled_object_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount"></a>

```python
def reset_max_human_labeled_object_count() -> None
```

##### `reset_max_percentage_of_input_dataset_labeled` <a name="reset_max_percentage_of_input_dataset_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled"></a>

```python
def reset_max_percentage_of_input_dataset_labeled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput">max_human_labeled_object_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput">max_percentage_of_input_dataset_labeled_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount">max_human_labeled_object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled">max_percentage_of_input_dataset_labeled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_human_labeled_object_count_input`<sup>Optional</sup> <a name="max_human_labeled_object_count_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput"></a>

```python
max_human_labeled_object_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_percentage_of_input_dataset_labeled_input`<sup>Optional</sup> <a name="max_percentage_of_input_dataset_labeled_input" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput"></a>

```python
max_percentage_of_input_dataset_labeled_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_human_labeled_object_count`<sup>Required</sup> <a name="max_human_labeled_object_count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount"></a>

```python
max_human_labeled_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_percentage_of_input_dataset_labeled`<sup>Required</sup> <a name="max_percentage_of_input_dataset_labeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled"></a>

```python
max_percentage_of_input_dataset_labeled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerLabelingJobStoppingConditions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>

---



