# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktn/provider-aws.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook aws_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHook;

AutoscalingLifecycleHook.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoscalingGroupName(java.lang.String)
    .lifecycleTransition(java.lang.String)
    .name(java.lang.String)
//  .defaultResult(java.lang.String)
//  .heartbeatTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .notificationMetadata(java.lang.String)
//  .notificationTargetArn(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition">lifecycleTransition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult">defaultResult</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout">heartbeatTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata">notificationMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn">notificationTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}.

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}.

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="notificationTargetArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#region AutoscalingLifecycleHook#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">resetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">resetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">resetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">resetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultResult` <a name="resetDefaultResult" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```java
public void resetDefaultResult()
```

##### `resetHeartbeatTimeout` <a name="resetHeartbeatTimeout" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```java
public void resetHeartbeatTimeout()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationMetadata` <a name="resetNotificationMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```java
public void resetNotificationMetadata()
```

##### `resetNotificationTargetArn` <a name="resetNotificationTargetArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```java
public void resetNotificationTargetArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```java
public void resetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHook;

AutoscalingLifecycleHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHook;

AutoscalingLifecycleHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHook;

AutoscalingLifecycleHook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHook;

AutoscalingLifecycleHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingLifecycleHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingLifecycleHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingLifecycleHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLifecycleHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">defaultResultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">heartbeatTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">lifecycleTransitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">notificationMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">notificationTargetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">defaultResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">lifecycleTransition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">notificationMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">notificationTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput"></a>

```java
public java.lang.String getAutoscalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `defaultResultInput`<sup>Optional</sup> <a name="defaultResultInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```java
public java.lang.String getDefaultResultInput();
```

- *Type:* java.lang.String

---

##### `heartbeatTimeoutInput`<sup>Optional</sup> <a name="heartbeatTimeoutInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```java
public java.lang.Number getHeartbeatTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleTransitionInput`<sup>Optional</sup> <a name="lifecycleTransitionInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```java
public java.lang.String getLifecycleTransitionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationMetadataInput`<sup>Optional</sup> <a name="notificationMetadataInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```java
public java.lang.String getNotificationMetadataInput();
```

- *Type:* java.lang.String

---

##### `notificationTargetArnInput`<sup>Optional</sup> <a name="notificationTargetArnInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```java
public java.lang.String getNotificationTargetArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```java
public java.lang.String getDefaultResult();
```

- *Type:* java.lang.String

---

##### `heartbeatTimeout`<sup>Required</sup> <a name="heartbeatTimeout" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```java
public java.lang.Number getHeartbeatTimeout();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```java
public java.lang.String getLifecycleTransition();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```java
public java.lang.String getNotificationMetadata();
```

- *Type:* java.lang.String

---

##### `notificationTargetArn`<sup>Required</sup> <a name="notificationTargetArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```java
public java.lang.String getNotificationTargetArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.autoscaling_lifecycle_hook.AutoscalingLifecycleHookConfig;

AutoscalingLifecycleHookConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoscalingGroupName(java.lang.String)
    .lifecycleTransition(java.lang.String)
    .name(java.lang.String)
//  .defaultResult(java.lang.String)
//  .heartbeatTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .notificationMetadata(java.lang.String)
//  .notificationTargetArn(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">lifecycleTransition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">defaultResult</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">notificationMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">notificationTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}. |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```java
public java.lang.String getLifecycleTransition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}.

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```java
public java.lang.String getDefaultResult();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```java
public java.lang.Number getHeartbeatTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```java
public java.lang.String getNotificationMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}.

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="notificationTargetArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```java
public java.lang.String getNotificationTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#region AutoscalingLifecycleHook#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}.

---



