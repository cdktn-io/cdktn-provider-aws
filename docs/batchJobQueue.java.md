# `batchJobQueue` Submodule <a name="`batchJobQueue` Submodule" id="@cdktn/provider-aws.batchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobQueue <a name="BatchJobQueue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue aws_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueue;

BatchJobQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .state(java.lang.String)
//  .computeEnvironmentOrder(IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder>)
//  .jobStateTimeLimitAction(IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction>)
//  .region(java.lang.String)
//  .schedulingPolicyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BatchJobQueueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#name BatchJobQueue#name}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder">computeEnvironmentOrder</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>></code> | compute_environment_order block. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitAction">jobStateTimeLimitAction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>></code> | job_state_time_limit_action block. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn">schedulingPolicyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#name BatchJobQueue#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `computeEnvironmentOrder`<sup>Optional</sup> <a name="computeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>>

compute_environment_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}

---

##### `jobStateTimeLimitAction`<sup>Optional</sup> <a name="jobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitAction"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>>

job_state_time_limit_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#job_state_time_limit_action BatchJobQueue#job_state_time_limit_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#region BatchJobQueue#region}

---

##### `schedulingPolicyArn`<sup>Optional</sup> <a name="schedulingPolicyArn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#timeouts BatchJobQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder">putComputeEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction">putJobStateTimeLimitAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder">resetComputeEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitAction">resetJobStateTimeLimitAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn">resetSchedulingPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeEnvironmentOrder` <a name="putComputeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder"></a>

```java
public void putComputeEnvironmentOrder(IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>>

---

##### `putJobStateTimeLimitAction` <a name="putJobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction"></a>

```java
public void putJobStateTimeLimitAction(IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts"></a>

```java
public void putTimeouts(BatchJobQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

---

##### `resetComputeEnvironmentOrder` <a name="resetComputeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder"></a>

```java
public void resetComputeEnvironmentOrder()
```

##### `resetJobStateTimeLimitAction` <a name="resetJobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitAction"></a>

```java
public void resetJobStateTimeLimitAction()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSchedulingPolicyArn` <a name="resetSchedulingPolicyArn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn"></a>

```java
public void resetSchedulingPolicyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isConstruct"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueue;

BatchJobQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueue;

BatchJobQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueue;

BatchJobQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueue;

BatchJobQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BatchJobQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BatchJobQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BatchJobQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BatchJobQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder">computeEnvironmentOrder</a></code> | <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitAction">jobStateTimeLimitAction</a></code> | <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList">BatchJobQueueJobStateTimeLimitActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference">BatchJobQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput">computeEnvironmentOrderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionInput">jobStateTimeLimitActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput">schedulingPolicyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn">schedulingPolicyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `computeEnvironmentOrder`<sup>Required</sup> <a name="computeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder"></a>

```java
public BatchJobQueueComputeEnvironmentOrderList getComputeEnvironmentOrder();
```

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobStateTimeLimitAction`<sup>Required</sup> <a name="jobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitAction"></a>

```java
public BatchJobQueueJobStateTimeLimitActionList getJobStateTimeLimitAction();
```

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList">BatchJobQueueJobStateTimeLimitActionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.timeouts"></a>

```java
public BatchJobQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference">BatchJobQueueTimeoutsOutputReference</a>

---

##### `computeEnvironmentOrderInput`<sup>Optional</sup> <a name="computeEnvironmentOrderInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput"></a>

```java
public IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder> getComputeEnvironmentOrderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>>

---

##### `jobStateTimeLimitActionInput`<sup>Optional</sup> <a name="jobStateTimeLimitActionInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionInput"></a>

```java
public IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction> getJobStateTimeLimitActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schedulingPolicyArnInput`<sup>Optional</sup> <a name="schedulingPolicyArnInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput"></a>

```java
public java.lang.String getSchedulingPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.timeoutsInput"></a>

```java
public IResolvable|BatchJobQueueTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `schedulingPolicyArn`<sup>Required</sup> <a name="schedulingPolicyArn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn"></a>

```java
public java.lang.String getSchedulingPolicyArn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobQueueComputeEnvironmentOrder <a name="BatchJobQueueComputeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueComputeEnvironmentOrder;

BatchJobQueueComputeEnvironmentOrder.builder()
    .computeEnvironment(java.lang.String)
    .order(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment">computeEnvironment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |

---

##### `computeEnvironment`<sup>Required</sup> <a name="computeEnvironment" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment"></a>

```java
public java.lang.String getComputeEnvironment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

### BatchJobQueueConfig <a name="BatchJobQueueConfig" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueConfig;

BatchJobQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .state(java.lang.String)
//  .computeEnvironmentOrder(IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder>)
//  .jobStateTimeLimitAction(IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction>)
//  .region(java.lang.String)
//  .schedulingPolicyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BatchJobQueueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#name BatchJobQueue#name}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder">computeEnvironmentOrder</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>></code> | compute_environment_order block. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitAction">jobStateTimeLimitAction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>></code> | job_state_time_limit_action block. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn">schedulingPolicyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#name BatchJobQueue#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `computeEnvironmentOrder`<sup>Optional</sup> <a name="computeEnvironmentOrder" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder"></a>

```java
public IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder> getComputeEnvironmentOrder();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>>

compute_environment_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}

---

##### `jobStateTimeLimitAction`<sup>Optional</sup> <a name="jobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitAction"></a>

```java
public IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction> getJobStateTimeLimitAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>>

job_state_time_limit_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#job_state_time_limit_action BatchJobQueue#job_state_time_limit_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#region BatchJobQueue#region}

---

##### `schedulingPolicyArn`<sup>Optional</sup> <a name="schedulingPolicyArn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn"></a>

```java
public java.lang.String getSchedulingPolicyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueConfig.property.timeouts"></a>

```java
public BatchJobQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#timeouts BatchJobQueue#timeouts}

---

### BatchJobQueueJobStateTimeLimitAction <a name="BatchJobQueueJobStateTimeLimitAction" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueJobStateTimeLimitAction;

BatchJobQueueJobStateTimeLimitAction.builder()
    .action(java.lang.String)
    .maxTimeSeconds(java.lang.Number)
    .reason(java.lang.String)
    .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#action BatchJobQueue#action}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.maxTimeSeconds">maxTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.reason">reason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#action BatchJobQueue#action}.

---

##### `maxTimeSeconds`<sup>Required</sup> <a name="maxTimeSeconds" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.maxTimeSeconds"></a>

```java
public java.lang.Number getMaxTimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}.

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

### BatchJobQueueTimeouts <a name="BatchJobQueueTimeouts" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueTimeouts;

BatchJobQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#create BatchJobQueue#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#delete BatchJobQueue#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_job_queue#update BatchJobQueue#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobQueueComputeEnvironmentOrderList <a name="BatchJobQueueComputeEnvironmentOrderList" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueComputeEnvironmentOrderList;

new BatchJobQueueComputeEnvironmentOrderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get"></a>

```java
public BatchJobQueueComputeEnvironmentOrderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchJobQueueComputeEnvironmentOrder> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>>

---


### BatchJobQueueComputeEnvironmentOrderOutputReference <a name="BatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueComputeEnvironmentOrderOutputReference;

new BatchJobQueueComputeEnvironmentOrderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput">computeEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">computeEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeEnvironmentInput`<sup>Optional</sup> <a name="computeEnvironmentInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput"></a>

```java
public java.lang.String getComputeEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `computeEnvironment`<sup>Required</sup> <a name="computeEnvironment" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```java
public java.lang.String getComputeEnvironment();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchJobQueueComputeEnvironmentOrder getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>

---


### BatchJobQueueJobStateTimeLimitActionList <a name="BatchJobQueueJobStateTimeLimitActionList" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueJobStateTimeLimitActionList;

new BatchJobQueueJobStateTimeLimitActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get"></a>

```java
public BatchJobQueueJobStateTimeLimitActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchJobQueueJobStateTimeLimitAction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>>

---


### BatchJobQueueJobStateTimeLimitActionOutputReference <a name="BatchJobQueueJobStateTimeLimitActionOutputReference" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueJobStateTimeLimitActionOutputReference;

new BatchJobQueueJobStateTimeLimitActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSecondsInput">maxTimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reasonInput">reasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSeconds">maxTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `maxTimeSecondsInput`<sup>Optional</sup> <a name="maxTimeSecondsInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSecondsInput"></a>

```java
public java.lang.Number getMaxTimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reasonInput"></a>

```java
public java.lang.String getReasonInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `maxTimeSeconds`<sup>Required</sup> <a name="maxTimeSeconds" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSeconds"></a>

```java
public java.lang.Number getMaxTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchJobQueueJobStateTimeLimitAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>

---


### BatchJobQueueTimeoutsOutputReference <a name="BatchJobQueueTimeoutsOutputReference" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.batch_job_queue.BatchJobQueueTimeoutsOutputReference;

new BatchJobQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchJobQueueTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

---



