# `autoscalingSchedule` Submodule <a name="`autoscalingSchedule` Submodule" id="@cdktn/provider-aws.autoscalingSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingSchedule <a name="AutoscalingSchedule" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule aws_autoscaling_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingSchedule;

AutoscalingSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoscalingGroupName(java.lang.String)
    .scheduledActionName(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .recurrence(java.lang.String)
//  .region(java.lang.String)
//  .startTime(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scheduledActionName">scheduledActionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.recurrence">recurrence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scheduledActionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.recurrence"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#region AutoscalingSchedule#region}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence"></a>

```java
public void resetRecurrence()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingSchedule;

AutoscalingSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingSchedule;

AutoscalingSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingSchedule;

AutoscalingSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingSchedule;

AutoscalingSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutoscalingSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput">recurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput">scheduledActionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName">scheduledActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput"></a>

```java
public java.lang.String getAutoscalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput"></a>

```java
public java.lang.String getRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scheduledActionNameInput`<sup>Optional</sup> <a name="scheduledActionNameInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput"></a>

```java
public java.lang.String getScheduledActionNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName"></a>

```java
public java.lang.String getScheduledActionName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingScheduleConfig <a name="AutoscalingScheduleConfig" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.autoscaling_schedule.AutoscalingScheduleConfig;

AutoscalingScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoscalingGroupName(java.lang.String)
    .scheduledActionName(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .recurrence(java.lang.String)
//  .region(java.lang.String)
//  .startTime(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName">scheduledActionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName"></a>

```java
public java.lang.String getScheduledActionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#region AutoscalingSchedule#region}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---



