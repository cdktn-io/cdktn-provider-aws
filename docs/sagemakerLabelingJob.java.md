# `sagemakerLabelingJob` Submodule <a name="`sagemakerLabelingJob` Submodule" id="@cdktn/provider-aws.sagemakerLabelingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerLabelingJob <a name="SagemakerLabelingJob" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJob;

SagemakerLabelingJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .labelAttributeName(java.lang.String)
    .labelingJobName(java.lang.String)
    .roleArn(java.lang.String)
//  .humanTaskConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig>)
//  .inputConfig(IResolvable|java.util.List<SagemakerLabelingJobInputConfig>)
//  .labelCategoryConfigS3Uri(java.lang.String)
//  .labelingJobAlgorithmsConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig>)
//  .outputConfig(IResolvable|java.util.List<SagemakerLabelingJobOutputConfig>)
//  .region(java.lang.String)
//  .stoppingConditions(IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelAttributeName">labelAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobName">labelingJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.humanTaskConfig">humanTaskConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>></code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.inputConfig">inputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>></code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelCategoryConfigS3Uri">labelCategoryConfigS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobAlgorithmsConfig">labelingJobAlgorithmsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>></code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.outputConfig">outputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>></code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.stoppingConditions">stoppingConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `labelAttributeName`<sup>Required</sup> <a name="labelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelAttributeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `labelingJobName`<sup>Required</sup> <a name="labelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `humanTaskConfig`<sup>Optional</sup> <a name="humanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.humanTaskConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>>

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `inputConfig`<sup>Optional</sup> <a name="inputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.inputConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>>

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `labelCategoryConfigS3Uri`<sup>Optional</sup> <a name="labelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelCategoryConfigS3Uri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `labelingJobAlgorithmsConfig`<sup>Optional</sup> <a name="labelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.labelingJobAlgorithmsConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>>

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.outputConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `stoppingConditions`<sup>Optional</sup> <a name="stoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.stoppingConditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig">putHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig">putInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig">putLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions">putStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig">resetHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig">resetInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri">resetLabelCategoryConfigS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig">resetLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig">resetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions">resetStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHumanTaskConfig` <a name="putHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig"></a>

```java
public void putHumanTaskConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>>

---

##### `putInputConfig` <a name="putInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig"></a>

```java
public void putInputConfig(IResolvable|java.util.List<SagemakerLabelingJobInputConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>>

---

##### `putLabelingJobAlgorithmsConfig` <a name="putLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig"></a>

```java
public void putLabelingJobAlgorithmsConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig"></a>

```java
public void putOutputConfig(IResolvable|java.util.List<SagemakerLabelingJobOutputConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>>

---

##### `putStoppingConditions` <a name="putStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions"></a>

```java
public void putStoppingConditions(IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>>

---

##### `resetHumanTaskConfig` <a name="resetHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig"></a>

```java
public void resetHumanTaskConfig()
```

##### `resetInputConfig` <a name="resetInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig"></a>

```java
public void resetInputConfig()
```

##### `resetLabelCategoryConfigS3Uri` <a name="resetLabelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri"></a>

```java
public void resetLabelCategoryConfigS3Uri()
```

##### `resetLabelingJobAlgorithmsConfig` <a name="resetLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig"></a>

```java
public void resetLabelingJobAlgorithmsConfig()
```

##### `resetOutputConfig` <a name="resetOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig"></a>

```java
public void resetOutputConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStoppingConditions` <a name="resetStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions"></a>

```java
public void resetStoppingConditions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerLabelingJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJob;

SagemakerLabelingJob.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJob;

SagemakerLabelingJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJob;

SagemakerLabelingJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJob;

SagemakerLabelingJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerLabelingJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerLabelingJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerLabelingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerLabelingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerLabelingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig">humanTaskConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig">inputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode">jobReferenceCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters">labelCounters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig">labelingJobAlgorithmsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn">labelingJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus">labelingJobStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions">stoppingConditions</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput">humanTaskConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput">inputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput">labelAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput">labelCategoryConfigS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput">labelingJobAlgorithmsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput">labelingJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput">outputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput">stoppingConditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName">labelAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri">labelCategoryConfigS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName">labelingJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `humanTaskConfig`<sup>Required</sup> <a name="humanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig"></a>

```java
public SagemakerLabelingJobHumanTaskConfigList getHumanTaskConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a>

---

##### `inputConfig`<sup>Required</sup> <a name="inputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig"></a>

```java
public SagemakerLabelingJobInputConfigList getInputConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a>

---

##### `jobReferenceCode`<sup>Required</sup> <a name="jobReferenceCode" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode"></a>

```java
public java.lang.String getJobReferenceCode();
```

- *Type:* java.lang.String

---

##### `labelCounters`<sup>Required</sup> <a name="labelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters"></a>

```java
public SagemakerLabelingJobLabelCountersList getLabelCounters();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a>

---

##### `labelingJobAlgorithmsConfig`<sup>Required</sup> <a name="labelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigList getLabelingJobAlgorithmsConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a>

---

##### `labelingJobArn`<sup>Required</sup> <a name="labelingJobArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn"></a>

```java
public java.lang.String getLabelingJobArn();
```

- *Type:* java.lang.String

---

##### `labelingJobStatus`<sup>Required</sup> <a name="labelingJobStatus" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus"></a>

```java
public java.lang.String getLabelingJobStatus();
```

- *Type:* java.lang.String

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig"></a>

```java
public SagemakerLabelingJobOutputConfigList getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a>

---

##### `stoppingConditions`<sup>Required</sup> <a name="stoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions"></a>

```java
public SagemakerLabelingJobStoppingConditionsList getStoppingConditions();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `humanTaskConfigInput`<sup>Optional</sup> <a name="humanTaskConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig> getHumanTaskConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>>

---

##### `inputConfigInput`<sup>Optional</sup> <a name="inputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfig> getInputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>>

---

##### `labelAttributeNameInput`<sup>Optional</sup> <a name="labelAttributeNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput"></a>

```java
public java.lang.String getLabelAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `labelCategoryConfigS3UriInput`<sup>Optional</sup> <a name="labelCategoryConfigS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput"></a>

```java
public java.lang.String getLabelCategoryConfigS3UriInput();
```

- *Type:* java.lang.String

---

##### `labelingJobAlgorithmsConfigInput`<sup>Optional</sup> <a name="labelingJobAlgorithmsConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig> getLabelingJobAlgorithmsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>>

---

##### `labelingJobNameInput`<sup>Optional</sup> <a name="labelingJobNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput"></a>

```java
public java.lang.String getLabelingJobNameInput();
```

- *Type:* java.lang.String

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobOutputConfig> getOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stoppingConditionsInput`<sup>Optional</sup> <a name="stoppingConditionsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions> getStoppingConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelAttributeName`<sup>Required</sup> <a name="labelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName"></a>

```java
public java.lang.String getLabelAttributeName();
```

- *Type:* java.lang.String

---

##### `labelCategoryConfigS3Uri`<sup>Required</sup> <a name="labelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri"></a>

```java
public java.lang.String getLabelCategoryConfigS3Uri();
```

- *Type:* java.lang.String

---

##### `labelingJobName`<sup>Required</sup> <a name="labelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName"></a>

```java
public java.lang.String getLabelingJobName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerLabelingJobConfig <a name="SagemakerLabelingJobConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobConfig;

SagemakerLabelingJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .labelAttributeName(java.lang.String)
    .labelingJobName(java.lang.String)
    .roleArn(java.lang.String)
//  .humanTaskConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig>)
//  .inputConfig(IResolvable|java.util.List<SagemakerLabelingJobInputConfig>)
//  .labelCategoryConfigS3Uri(java.lang.String)
//  .labelingJobAlgorithmsConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig>)
//  .outputConfig(IResolvable|java.util.List<SagemakerLabelingJobOutputConfig>)
//  .region(java.lang.String)
//  .stoppingConditions(IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName">labelAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName">labelingJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig">humanTaskConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>></code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig">inputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>></code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri">labelCategoryConfigS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig">labelingJobAlgorithmsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>></code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig">outputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>></code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions">stoppingConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `labelAttributeName`<sup>Required</sup> <a name="labelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName"></a>

```java
public java.lang.String getLabelAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `labelingJobName`<sup>Required</sup> <a name="labelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName"></a>

```java
public java.lang.String getLabelingJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `humanTaskConfig`<sup>Optional</sup> <a name="humanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig> getHumanTaskConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>>

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `inputConfig`<sup>Optional</sup> <a name="inputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfig> getInputConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>>

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `labelCategoryConfigS3Uri`<sup>Optional</sup> <a name="labelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri"></a>

```java
public java.lang.String getLabelCategoryConfigS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `labelingJobAlgorithmsConfig`<sup>Optional</sup> <a name="labelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig> getLabelingJobAlgorithmsConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>>

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobOutputConfig> getOutputConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `stoppingConditions`<sup>Optional</sup> <a name="stoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions> getStoppingConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

### SagemakerLabelingJobHumanTaskConfig <a name="SagemakerLabelingJobHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfig;

SagemakerLabelingJobHumanTaskConfig.builder()
    .numberOfHumanWorkersPerDataObject(java.lang.Number)
    .taskDescription(java.lang.String)
    .taskTimeLimitInSeconds(java.lang.Number)
    .taskTitle(java.lang.String)
    .workteamArn(java.lang.String)
//  .annotationConsolidationConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig>)
//  .maxConcurrentTaskCount(java.lang.Number)
//  .preHumanTaskLambdaArn(java.lang.String)
//  .publicWorkforceTaskPrice(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice>)
//  .taskAvailabilityLifetimeInSeconds(java.lang.Number)
//  .taskKeywords(java.util.List<java.lang.String>)
//  .uiConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigUiConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject">numberOfHumanWorkersPerDataObject</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription">taskDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle">taskTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn">workteamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig">annotationConsolidationConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>></code> | annotation_consolidation_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount">maxConcurrentTaskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn">preHumanTaskLambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>></code> | public_workforce_task_price block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords">taskKeywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig">uiConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>></code> | ui_config block. |

---

##### `numberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="numberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject"></a>

```java
public java.lang.Number getNumberOfHumanWorkersPerDataObject();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}.

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription"></a>

```java
public java.lang.String getTaskDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}.

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds"></a>

```java
public java.lang.Number getTaskTimeLimitInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}.

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle"></a>

```java
public java.lang.String getTaskTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}.

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn"></a>

```java
public java.lang.String getWorkteamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}.

---

##### `annotationConsolidationConfig`<sup>Optional</sup> <a name="annotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig> getAnnotationConsolidationConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>>

annotation_consolidation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config SagemakerLabelingJob#annotation_consolidation_config}

---

##### `maxConcurrentTaskCount`<sup>Optional</sup> <a name="maxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount"></a>

```java
public java.lang.Number getMaxConcurrentTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}.

---

##### `preHumanTaskLambdaArn`<sup>Optional</sup> <a name="preHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn"></a>

```java
public java.lang.String getPreHumanTaskLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}.

---

##### `publicWorkforceTaskPrice`<sup>Optional</sup> <a name="publicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice> getPublicWorkforceTaskPrice();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price SagemakerLabelingJob#public_workforce_task_price}

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}.

---

##### `taskKeywords`<sup>Optional</sup> <a name="taskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords"></a>

```java
public java.util.List<java.lang.String> getTaskKeywords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}.

---

##### `uiConfig`<sup>Optional</sup> <a name="uiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigUiConfig> getUiConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>>

ui_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#ui_config SagemakerLabelingJob#ui_config}

---

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig;

SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.builder()
    .annotationConsolidationLambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn">annotationConsolidationLambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}. |

---

##### `annotationConsolidationLambdaArn`<sup>Required</sup> <a name="annotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn"></a>

```java
public java.lang.String getAnnotationConsolidationLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}.

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice;

SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.builder()
//  .amountInUsd(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd">amountInUsd</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>></code> | amount_in_usd block. |

---

##### `amountInUsd`<sup>Optional</sup> <a name="amountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd> getAmountInUsd();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>>

amount_in_usd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#amount_in_usd SagemakerLabelingJob#amount_in_usd}

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd;

SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.builder()
//  .cents(java.lang.Number)
//  .dollars(java.lang.Number)
//  .tenthFractionsOfACent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```java
public java.lang.Number getCents();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```java
public java.lang.Number getDollars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}.

---

##### `tenthFractionsOfACent`<sup>Optional</sup> <a name="tenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```java
public java.lang.Number getTenthFractionsOfACent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}.

---

### SagemakerLabelingJobHumanTaskConfigUiConfig <a name="SagemakerLabelingJobHumanTaskConfigUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigUiConfig;

SagemakerLabelingJobHumanTaskConfigUiConfig.builder()
//  .humanTaskUiArn(java.lang.String)
//  .uiTemplateS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri">uiTemplateS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}. |

---

##### `humanTaskUiArn`<sup>Optional</sup> <a name="humanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn"></a>

```java
public java.lang.String getHumanTaskUiArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}.

---

##### `uiTemplateS3Uri`<sup>Optional</sup> <a name="uiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri"></a>

```java
public java.lang.String getUiTemplateS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}.

---

### SagemakerLabelingJobInputConfig <a name="SagemakerLabelingJobInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfig;

SagemakerLabelingJobInputConfig.builder()
//  .dataAttributes(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataAttributes>)
//  .dataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes">dataAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>></code> | data_attributes block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource">dataSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>></code> | data_source block. |

---

##### `dataAttributes`<sup>Optional</sup> <a name="dataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataAttributes> getDataAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>>

data_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#data_attributes SagemakerLabelingJob#data_attributes}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSource> getDataSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>>

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#data_source SagemakerLabelingJob#data_source}

---

### SagemakerLabelingJobInputConfigDataAttributes <a name="SagemakerLabelingJobInputConfigDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataAttributes;

SagemakerLabelingJobInputConfigDataAttributes.builder()
//  .contentClassifiers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers">contentClassifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}. |

---

##### `contentClassifiers`<sup>Optional</sup> <a name="contentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers"></a>

```java
public java.util.List<java.lang.String> getContentClassifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}.

---

### SagemakerLabelingJobInputConfigDataSource <a name="SagemakerLabelingJobInputConfigDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSource;

SagemakerLabelingJobInputConfigDataSource.builder()
//  .s3DataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceS3DataSource>)
//  .snsDataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceSnsDataSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource">s3DataSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>></code> | s3_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource">snsDataSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>></code> | sns_data_source block. |

---

##### `s3DataSource`<sup>Optional</sup> <a name="s3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceS3DataSource> getS3DataSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>>

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#s3_data_source SagemakerLabelingJob#s3_data_source}

---

##### `snsDataSource`<sup>Optional</sup> <a name="snsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceSnsDataSource> getSnsDataSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>>

sns_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#sns_data_source SagemakerLabelingJob#sns_data_source}

---

### SagemakerLabelingJobInputConfigDataSourceS3DataSource <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceS3DataSource;

SagemakerLabelingJobInputConfigDataSourceS3DataSource.builder()
    .manifestS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri">manifestS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}. |

---

##### `manifestS3Uri`<sup>Required</sup> <a name="manifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri"></a>

```java
public java.lang.String getManifestS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}.

---

### SagemakerLabelingJobInputConfigDataSourceSnsDataSource <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceSnsDataSource;

SagemakerLabelingJobInputConfigDataSourceSnsDataSource.builder()
    .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobLabelCounters <a name="SagemakerLabelingJobLabelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelCounters;

SagemakerLabelingJobLabelCounters.builder()
    .build();
```


### SagemakerLabelingJobLabelingJobAlgorithmsConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfig;

SagemakerLabelingJobLabelingJobAlgorithmsConfig.builder()
    .labelingJobAlgorithmSpecificationArn(java.lang.String)
//  .initialActiveLearningModelArn(java.lang.String)
//  .labelingJobResourceConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn">labelingJobAlgorithmSpecificationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn">initialActiveLearningModelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig">labelingJobResourceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>></code> | labeling_job_resource_config block. |

---

##### `labelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="labelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn"></a>

```java
public java.lang.String getLabelingJobAlgorithmSpecificationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}.

---

##### `initialActiveLearningModelArn`<sup>Optional</sup> <a name="initialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn"></a>

```java
public java.lang.String getInitialActiveLearningModelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}.

---

##### `labelingJobResourceConfig`<sup>Optional</sup> <a name="labelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig> getLabelingJobResourceConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>>

labeling_job_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config SagemakerLabelingJob#labeling_job_resource_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig;

SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.builder()
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig">vpcConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>></code> | vpc_config block. |

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig> getVpcConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#vpc_config SagemakerLabelingJob#vpc_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig;

SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}.

---

### SagemakerLabelingJobOutputConfig <a name="SagemakerLabelingJobOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobOutputConfig;

SagemakerLabelingJobOutputConfig.builder()
    .s3OutputPath(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobStoppingConditions <a name="SagemakerLabelingJobStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobStoppingConditions;

SagemakerLabelingJobStoppingConditions.builder()
//  .maxHumanLabeledObjectCount(java.lang.Number)
//  .maxPercentageOfInputDatasetLabeled(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount">maxHumanLabeledObjectCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled">maxPercentageOfInputDatasetLabeled</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}. |

---

##### `maxHumanLabeledObjectCount`<sup>Optional</sup> <a name="maxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount"></a>

```java
public java.lang.Number getMaxHumanLabeledObjectCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}.

---

##### `maxPercentageOfInputDatasetLabeled`<sup>Optional</sup> <a name="maxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled"></a>

```java
public java.lang.Number getMaxPercentageOfInputDatasetLabeled();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList;

new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get"></a>

```java
public SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>>

---


### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference;

new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput">annotationConsolidationLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn">annotationConsolidationLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotationConsolidationLambdaArnInput`<sup>Optional</sup> <a name="annotationConsolidationLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput"></a>

```java
public java.lang.String getAnnotationConsolidationLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `annotationConsolidationLambdaArn`<sup>Required</sup> <a name="annotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn"></a>

```java
public java.lang.String getAnnotationConsolidationLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigList <a name="SagemakerLabelingJobHumanTaskConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigList;

new SagemakerLabelingJobHumanTaskConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get"></a>

```java
public SagemakerLabelingJobHumanTaskConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>>

---


### SagemakerLabelingJobHumanTaskConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigOutputReference;

new SagemakerLabelingJobHumanTaskConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig">putAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice">putPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig">putUiConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig">resetAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount">resetMaxConcurrentTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn">resetPreHumanTaskLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice">resetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">resetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords">resetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig">resetUiConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotationConsolidationConfig` <a name="putAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig"></a>

```java
public void putAnnotationConsolidationConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>>

---

##### `putPublicWorkforceTaskPrice` <a name="putPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```java
public void putPublicWorkforceTaskPrice(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>>

---

##### `putUiConfig` <a name="putUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig"></a>

```java
public void putUiConfig(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigUiConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>>

---

##### `resetAnnotationConsolidationConfig` <a name="resetAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig"></a>

```java
public void resetAnnotationConsolidationConfig()
```

##### `resetMaxConcurrentTaskCount` <a name="resetMaxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount"></a>

```java
public void resetMaxConcurrentTaskCount()
```

##### `resetPreHumanTaskLambdaArn` <a name="resetPreHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn"></a>

```java
public void resetPreHumanTaskLambdaArn()
```

##### `resetPublicWorkforceTaskPrice` <a name="resetPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```java
public void resetPublicWorkforceTaskPrice()
```

##### `resetTaskAvailabilityLifetimeInSeconds` <a name="resetTaskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```java
public void resetTaskAvailabilityLifetimeInSeconds()
```

##### `resetTaskKeywords` <a name="resetTaskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords"></a>

```java
public void resetTaskKeywords()
```

##### `resetUiConfig` <a name="resetUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig"></a>

```java
public void resetUiConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig">annotationConsolidationConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig">uiConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput">annotationConsolidationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput">maxConcurrentTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput">numberOfHumanWorkersPerDataObjectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput">preHumanTaskLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput">publicWorkforceTaskPriceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">taskAvailabilityLifetimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput">taskDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput">taskKeywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput">taskTimeLimitInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput">taskTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput">uiConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput">workteamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount">maxConcurrentTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject">numberOfHumanWorkersPerDataObject</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn">preHumanTaskLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription">taskDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords">taskKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle">taskTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn">workteamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotationConsolidationConfig`<sup>Required</sup> <a name="annotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig"></a>

```java
public SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList getAnnotationConsolidationConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a>

---

##### `publicWorkforceTaskPrice`<sup>Required</sup> <a name="publicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```java
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList getPublicWorkforceTaskPrice();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a>

---

##### `uiConfig`<sup>Required</sup> <a name="uiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig"></a>

```java
public SagemakerLabelingJobHumanTaskConfigUiConfigList getUiConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a>

---

##### `annotationConsolidationConfigInput`<sup>Optional</sup> <a name="annotationConsolidationConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig> getAnnotationConsolidationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>>

---

##### `maxConcurrentTaskCountInput`<sup>Optional</sup> <a name="maxConcurrentTaskCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput"></a>

```java
public java.lang.Number getMaxConcurrentTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `numberOfHumanWorkersPerDataObjectInput`<sup>Optional</sup> <a name="numberOfHumanWorkersPerDataObjectInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput"></a>

```java
public java.lang.Number getNumberOfHumanWorkersPerDataObjectInput();
```

- *Type:* java.lang.Number

---

##### `preHumanTaskLambdaArnInput`<sup>Optional</sup> <a name="preHumanTaskLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput"></a>

```java
public java.lang.String getPreHumanTaskLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `publicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="publicWorkforceTaskPriceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice> getPublicWorkforceTaskPriceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>>

---

##### `taskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `taskDescriptionInput`<sup>Optional</sup> <a name="taskDescriptionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput"></a>

```java
public java.lang.String getTaskDescriptionInput();
```

- *Type:* java.lang.String

---

##### `taskKeywordsInput`<sup>Optional</sup> <a name="taskKeywordsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput"></a>

```java
public java.util.List<java.lang.String> getTaskKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="taskTimeLimitInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```java
public java.lang.Number getTaskTimeLimitInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `taskTitleInput`<sup>Optional</sup> <a name="taskTitleInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput"></a>

```java
public java.lang.String getTaskTitleInput();
```

- *Type:* java.lang.String

---

##### `uiConfigInput`<sup>Optional</sup> <a name="uiConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigUiConfig> getUiConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>>

---

##### `workteamArnInput`<sup>Optional</sup> <a name="workteamArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput"></a>

```java
public java.lang.String getWorkteamArnInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrentTaskCount`<sup>Required</sup> <a name="maxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount"></a>

```java
public java.lang.Number getMaxConcurrentTaskCount();
```

- *Type:* java.lang.Number

---

##### `numberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="numberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject"></a>

```java
public java.lang.Number getNumberOfHumanWorkersPerDataObject();
```

- *Type:* java.lang.Number

---

##### `preHumanTaskLambdaArn`<sup>Required</sup> <a name="preHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn"></a>

```java
public java.lang.String getPreHumanTaskLambdaArn();
```

- *Type:* java.lang.String

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription"></a>

```java
public java.lang.String getTaskDescription();
```

- *Type:* java.lang.String

---

##### `taskKeywords`<sup>Required</sup> <a name="taskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords"></a>

```java
public java.util.List<java.lang.String> getTaskKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```java
public java.lang.Number getTaskTimeLimitInSeconds();
```

- *Type:* java.lang.Number

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle"></a>

```java
public java.lang.String getTaskTitle();
```

- *Type:* java.lang.String

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn"></a>

```java
public java.lang.String getWorkteamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobHumanTaskConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get"></a>

```java
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">resetCents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">resetDollars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">resetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCents` <a name="resetCents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```java
public void resetCents()
```

##### `resetDollars` <a name="resetDollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```java
public void resetDollars()
```

##### `resetTenthFractionsOfACent` <a name="resetTenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```java
public void resetTenthFractionsOfACent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">centsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollarsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenthFractionsOfACentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `centsInput`<sup>Optional</sup> <a name="centsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```java
public java.lang.Number getCentsInput();
```

- *Type:* java.lang.Number

---

##### `dollarsInput`<sup>Optional</sup> <a name="dollarsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```java
public java.lang.Number getDollarsInput();
```

- *Type:* java.lang.Number

---

##### `tenthFractionsOfACentInput`<sup>Optional</sup> <a name="tenthFractionsOfACentInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```java
public java.lang.Number getTenthFractionsOfACentInput();
```

- *Type:* java.lang.Number

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```java
public java.lang.Number getCents();
```

- *Type:* java.lang.Number

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```java
public java.lang.Number getDollars();
```

- *Type:* java.lang.Number

---

##### `tenthFractionsOfACent`<sup>Required</sup> <a name="tenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```java
public java.lang.Number getTenthFractionsOfACent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get"></a>

```java
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">putAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">resetAmountInUsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmountInUsd` <a name="putAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```java
public void putAmountInUsd(IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>>

---

##### `resetAmountInUsd` <a name="resetAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```java
public void resetAmountInUsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amountInUsdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInUsd`<sup>Required</sup> <a name="amountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```java
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList getAmountInUsd();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a>

---

##### `amountInUsdInput`<sup>Optional</sup> <a name="amountInUsdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd> getAmountInUsdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>

---


### SagemakerLabelingJobHumanTaskConfigUiConfigList <a name="SagemakerLabelingJobHumanTaskConfigUiConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigUiConfigList;

new SagemakerLabelingJobHumanTaskConfigUiConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get"></a>

```java
public SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobHumanTaskConfigUiConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>>

---


### SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference;

new SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn">resetHumanTaskUiArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri">resetUiTemplateS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHumanTaskUiArn` <a name="resetHumanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn"></a>

```java
public void resetHumanTaskUiArn()
```

##### `resetUiTemplateS3Uri` <a name="resetUiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri"></a>

```java
public void resetUiTemplateS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput">humanTaskUiArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput">uiTemplateS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri">uiTemplateS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `humanTaskUiArnInput`<sup>Optional</sup> <a name="humanTaskUiArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput"></a>

```java
public java.lang.String getHumanTaskUiArnInput();
```

- *Type:* java.lang.String

---

##### `uiTemplateS3UriInput`<sup>Optional</sup> <a name="uiTemplateS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput"></a>

```java
public java.lang.String getUiTemplateS3UriInput();
```

- *Type:* java.lang.String

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn"></a>

```java
public java.lang.String getHumanTaskUiArn();
```

- *Type:* java.lang.String

---

##### `uiTemplateS3Uri`<sup>Required</sup> <a name="uiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri"></a>

```java
public java.lang.String getUiTemplateS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>

---


### SagemakerLabelingJobInputConfigDataAttributesList <a name="SagemakerLabelingJobInputConfigDataAttributesList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataAttributesList;

new SagemakerLabelingJobInputConfigDataAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get"></a>

```java
public SagemakerLabelingJobInputConfigDataAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>>

---


### SagemakerLabelingJobInputConfigDataAttributesOutputReference <a name="SagemakerLabelingJobInputConfigDataAttributesOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataAttributesOutputReference;

new SagemakerLabelingJobInputConfigDataAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers">resetContentClassifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentClassifiers` <a name="resetContentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers"></a>

```java
public void resetContentClassifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput">contentClassifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers">contentClassifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentClassifiersInput`<sup>Optional</sup> <a name="contentClassifiersInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput"></a>

```java
public java.util.List<java.lang.String> getContentClassifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentClassifiers`<sup>Required</sup> <a name="contentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers"></a>

```java
public java.util.List<java.lang.String> getContentClassifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobInputConfigDataAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>

---


### SagemakerLabelingJobInputConfigDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceList;

new SagemakerLabelingJobInputConfigDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>>

---


### SagemakerLabelingJobInputConfigDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceOutputReference;

new SagemakerLabelingJobInputConfigDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource">putS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource">putSnsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource">resetS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource">resetSnsDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataSource` <a name="putS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource"></a>

```java
public void putS3DataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceS3DataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>>

---

##### `putSnsDataSource` <a name="putSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource"></a>

```java
public void putSnsDataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceSnsDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>>

---

##### `resetS3DataSource` <a name="resetS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource"></a>

```java
public void resetS3DataSource()
```

##### `resetSnsDataSource` <a name="resetSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource"></a>

```java
public void resetSnsDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource">snsDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput">s3DataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput">snsDataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceS3DataSourceList getS3DataSource();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a>

---

##### `snsDataSource`<sup>Required</sup> <a name="snsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList getSnsDataSource();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a>

---

##### `s3DataSourceInput`<sup>Optional</sup> <a name="s3DataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceS3DataSource> getS3DataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>>

---

##### `snsDataSourceInput`<sup>Optional</sup> <a name="snsDataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceSnsDataSource> getSnsDataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobInputConfigDataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList;

new SagemakerLabelingJobInputConfigDataSourceS3DataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceS3DataSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>>

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference;

new SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput">manifestS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri">manifestS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifestS3UriInput`<sup>Optional</sup> <a name="manifestS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput"></a>

```java
public java.lang.String getManifestS3UriInput();
```

- *Type:* java.lang.String

---

##### `manifestS3Uri`<sup>Required</sup> <a name="manifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri"></a>

```java
public java.lang.String getManifestS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList;

new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSourceSnsDataSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>>

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference;

new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>

---


### SagemakerLabelingJobInputConfigList <a name="SagemakerLabelingJobInputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigList;

new SagemakerLabelingJobInputConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get"></a>

```java
public SagemakerLabelingJobInputConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>>

---


### SagemakerLabelingJobInputConfigOutputReference <a name="SagemakerLabelingJobInputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobInputConfigOutputReference;

new SagemakerLabelingJobInputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes">putDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes">resetDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataAttributes` <a name="putDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes"></a>

```java
public void putDataAttributes(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>>

---

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource"></a>

```java
public void putDataSource(IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>>

---

##### `resetDataAttributes` <a name="resetDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes"></a>

```java
public void resetDataAttributes()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes">dataAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput">dataAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataAttributes`<sup>Required</sup> <a name="dataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes"></a>

```java
public SagemakerLabelingJobInputConfigDataAttributesList getDataAttributes();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource"></a>

```java
public SagemakerLabelingJobInputConfigDataSourceList getDataSource();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a>

---

##### `dataAttributesInput`<sup>Optional</sup> <a name="dataAttributesInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataAttributes> getDataAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobInputConfigDataSource> getDataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobInputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>

---


### SagemakerLabelingJobLabelCountersList <a name="SagemakerLabelingJobLabelCountersList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelCountersList;

new SagemakerLabelingJobLabelCountersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get"></a>

```java
public SagemakerLabelingJobLabelCountersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SagemakerLabelingJobLabelCountersOutputReference <a name="SagemakerLabelingJobLabelCountersOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelCountersOutputReference;

new SagemakerLabelingJobLabelCountersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError">failedNonRetryableError</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled">humanLabeled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled">machineLabeled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled">totalLabeled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled">unlabeled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failedNonRetryableError`<sup>Required</sup> <a name="failedNonRetryableError" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError"></a>

```java
public java.lang.Number getFailedNonRetryableError();
```

- *Type:* java.lang.Number

---

##### `humanLabeled`<sup>Required</sup> <a name="humanLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled"></a>

```java
public java.lang.Number getHumanLabeled();
```

- *Type:* java.lang.Number

---

##### `machineLabeled`<sup>Required</sup> <a name="machineLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled"></a>

```java
public java.lang.Number getMachineLabeled();
```

- *Type:* java.lang.Number

---

##### `totalLabeled`<sup>Required</sup> <a name="totalLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled"></a>

```java
public java.lang.Number getTotalLabeled();
```

- *Type:* java.lang.Number

---

##### `unlabeled`<sup>Required</sup> <a name="unlabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled"></a>

```java
public java.lang.Number getUnlabeled();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue"></a>

```java
public SagemakerLabelingJobLabelCounters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>>

---

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a>

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig> getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>>

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigList;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig">putLabelingJobResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn">resetInitialActiveLearningModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig">resetLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelingJobResourceConfig` <a name="putLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig"></a>

```java
public void putLabelingJobResourceConfig(IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>>

---

##### `resetInitialActiveLearningModelArn` <a name="resetInitialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn"></a>

```java
public void resetInitialActiveLearningModelArn()
```

##### `resetLabelingJobResourceConfig` <a name="resetLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig"></a>

```java
public void resetLabelingJobResourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig">labelingJobResourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput">initialActiveLearningModelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput">labelingJobAlgorithmSpecificationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput">labelingJobResourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn">initialActiveLearningModelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn">labelingJobAlgorithmSpecificationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelingJobResourceConfig`<sup>Required</sup> <a name="labelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig"></a>

```java
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList getLabelingJobResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a>

---

##### `initialActiveLearningModelArnInput`<sup>Optional</sup> <a name="initialActiveLearningModelArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput"></a>

```java
public java.lang.String getInitialActiveLearningModelArnInput();
```

- *Type:* java.lang.String

---

##### `labelingJobAlgorithmSpecificationArnInput`<sup>Optional</sup> <a name="labelingJobAlgorithmSpecificationArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput"></a>

```java
public java.lang.String getLabelingJobAlgorithmSpecificationArnInput();
```

- *Type:* java.lang.String

---

##### `labelingJobResourceConfigInput`<sup>Optional</sup> <a name="labelingJobResourceConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig> getLabelingJobResourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>>

---

##### `initialActiveLearningModelArn`<sup>Required</sup> <a name="initialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn"></a>

```java
public java.lang.String getInitialActiveLearningModelArn();
```

- *Type:* java.lang.String

---

##### `labelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="labelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn"></a>

```java
public java.lang.String getLabelingJobAlgorithmSpecificationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>

---


### SagemakerLabelingJobOutputConfigList <a name="SagemakerLabelingJobOutputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobOutputConfigList;

new SagemakerLabelingJobOutputConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get"></a>

```java
public SagemakerLabelingJobOutputConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobOutputConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>>

---


### SagemakerLabelingJobOutputConfigOutputReference <a name="SagemakerLabelingJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobOutputConfigOutputReference;

new SagemakerLabelingJobOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>

---


### SagemakerLabelingJobStoppingConditionsList <a name="SagemakerLabelingJobStoppingConditionsList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobStoppingConditionsList;

new SagemakerLabelingJobStoppingConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get"></a>

```java
public SagemakerLabelingJobStoppingConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerLabelingJobStoppingConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>>

---


### SagemakerLabelingJobStoppingConditionsOutputReference <a name="SagemakerLabelingJobStoppingConditionsOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_labeling_job.SagemakerLabelingJobStoppingConditionsOutputReference;

new SagemakerLabelingJobStoppingConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount">resetMaxHumanLabeledObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled">resetMaxPercentageOfInputDatasetLabeled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxHumanLabeledObjectCount` <a name="resetMaxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount"></a>

```java
public void resetMaxHumanLabeledObjectCount()
```

##### `resetMaxPercentageOfInputDatasetLabeled` <a name="resetMaxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled"></a>

```java
public void resetMaxPercentageOfInputDatasetLabeled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput">maxHumanLabeledObjectCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput">maxPercentageOfInputDatasetLabeledInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount">maxHumanLabeledObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled">maxPercentageOfInputDatasetLabeled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxHumanLabeledObjectCountInput`<sup>Optional</sup> <a name="maxHumanLabeledObjectCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput"></a>

```java
public java.lang.Number getMaxHumanLabeledObjectCountInput();
```

- *Type:* java.lang.Number

---

##### `maxPercentageOfInputDatasetLabeledInput`<sup>Optional</sup> <a name="maxPercentageOfInputDatasetLabeledInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput"></a>

```java
public java.lang.Number getMaxPercentageOfInputDatasetLabeledInput();
```

- *Type:* java.lang.Number

---

##### `maxHumanLabeledObjectCount`<sup>Required</sup> <a name="maxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount"></a>

```java
public java.lang.Number getMaxHumanLabeledObjectCount();
```

- *Type:* java.lang.Number

---

##### `maxPercentageOfInputDatasetLabeled`<sup>Required</sup> <a name="maxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled"></a>

```java
public java.lang.Number getMaxPercentageOfInputDatasetLabeled();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerLabelingJobStoppingConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>

---



