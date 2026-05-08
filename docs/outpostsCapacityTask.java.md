# `outpostsCapacityTask` Submodule <a name="`outpostsCapacityTask` Submodule" id="@cdktn/provider-aws.outpostsCapacityTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsCapacityTask <a name="OutpostsCapacityTask" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTask;

OutpostsCapacityTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .outpostIdentifier(java.lang.String)
//  .assetId(java.lang.String)
//  .instancePool(IResolvable|java.util.List<OutpostsCapacityTaskInstancePool>)
//  .instancesToExclude(IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude>)
//  .orderId(java.lang.String)
//  .region(java.lang.String)
//  .taskActionOnBlockingInstances(java.lang.String)
//  .timeouts(OutpostsCapacityTaskTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.outpostIdentifier">outpostIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancePool">instancePool</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>></code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancesToExclude">instancesToExclude</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>></code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.orderId">orderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.taskActionOnBlockingInstances">taskActionOnBlockingInstances</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `outpostIdentifier`<sup>Required</sup> <a name="outpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.outpostIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.assetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `instancePool`<sup>Optional</sup> <a name="instancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancePool"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>>

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `instancesToExclude`<sup>Optional</sup> <a name="instancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancesToExclude"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>>

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.orderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `taskActionOnBlockingInstances`<sup>Optional</sup> <a name="taskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.taskActionOnBlockingInstances"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool">putInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude">putInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool">resetInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude">resetInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId">resetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances">resetTaskActionOnBlockingInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstancePool` <a name="putInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool"></a>

```java
public void putInstancePool(IResolvable|java.util.List<OutpostsCapacityTaskInstancePool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>>

---

##### `putInstancesToExclude` <a name="putInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude"></a>

```java
public void putInstancesToExclude(IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts"></a>

```java
public void putTimeouts(OutpostsCapacityTaskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `resetAssetId` <a name="resetAssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId"></a>

```java
public void resetAssetId()
```

##### `resetInstancePool` <a name="resetInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool"></a>

```java
public void resetInstancePool()
```

##### `resetInstancesToExclude` <a name="resetInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude"></a>

```java
public void resetInstancesToExclude()
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId"></a>

```java
public void resetOrderId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTaskActionOnBlockingInstances` <a name="resetTaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances"></a>

```java
public void resetTaskActionOnBlockingInstances()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTask;

OutpostsCapacityTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTask;

OutpostsCapacityTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTask;

OutpostsCapacityTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTask;

OutpostsCapacityTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OutpostsCapacityTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OutpostsCapacityTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OutpostsCapacityTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsCapacityTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId">capacityTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate">completionDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool">instancePool</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude">instancesToExclude</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput">instancePoolInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput">instancesToExcludeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput">orderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput">outpostIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput">taskActionOnBlockingInstancesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier">outpostIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances">taskActionOnBlockingInstances</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityTaskId`<sup>Required</sup> <a name="capacityTaskId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId"></a>

```java
public java.lang.String getCapacityTaskId();
```

- *Type:* java.lang.String

---

##### `completionDate`<sup>Required</sup> <a name="completionDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate"></a>

```java
public java.lang.String getCompletionDate();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `instancePool`<sup>Required</sup> <a name="instancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool"></a>

```java
public OutpostsCapacityTaskInstancePoolList getInstancePool();
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a>

---

##### `instancesToExclude`<sup>Required</sup> <a name="instancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude"></a>

```java
public OutpostsCapacityTaskInstancesToExcludeList getInstancesToExclude();
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts"></a>

```java
public OutpostsCapacityTaskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput"></a>

```java
public java.lang.String getAssetIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolInput`<sup>Optional</sup> <a name="instancePoolInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancePool> getInstancePoolInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>>

---

##### `instancesToExcludeInput`<sup>Optional</sup> <a name="instancesToExcludeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude> getInstancesToExcludeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>>

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput"></a>

```java
public java.lang.String getOrderIdInput();
```

- *Type:* java.lang.String

---

##### `outpostIdentifierInput`<sup>Optional</sup> <a name="outpostIdentifierInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput"></a>

```java
public java.lang.String getOutpostIdentifierInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `taskActionOnBlockingInstancesInput`<sup>Optional</sup> <a name="taskActionOnBlockingInstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput"></a>

```java
public java.lang.String getTaskActionOnBlockingInstancesInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput"></a>

```java
public IResolvable|OutpostsCapacityTaskTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `outpostIdentifier`<sup>Required</sup> <a name="outpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier"></a>

```java
public java.lang.String getOutpostIdentifier();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `taskActionOnBlockingInstances`<sup>Required</sup> <a name="taskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances"></a>

```java
public java.lang.String getTaskActionOnBlockingInstances();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsCapacityTaskConfig <a name="OutpostsCapacityTaskConfig" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskConfig;

OutpostsCapacityTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .outpostIdentifier(java.lang.String)
//  .assetId(java.lang.String)
//  .instancePool(IResolvable|java.util.List<OutpostsCapacityTaskInstancePool>)
//  .instancesToExclude(IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude>)
//  .orderId(java.lang.String)
//  .region(java.lang.String)
//  .taskActionOnBlockingInstances(java.lang.String)
//  .timeouts(OutpostsCapacityTaskTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier">outpostIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool">instancePool</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>></code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude">instancesToExclude</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>></code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId">orderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances">taskActionOnBlockingInstances</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `outpostIdentifier`<sup>Required</sup> <a name="outpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier"></a>

```java
public java.lang.String getOutpostIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `instancePool`<sup>Optional</sup> <a name="instancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancePool> getInstancePool();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>>

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `instancesToExclude`<sup>Optional</sup> <a name="instancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude> getInstancesToExclude();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>>

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `taskActionOnBlockingInstances`<sup>Optional</sup> <a name="taskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances"></a>

```java
public java.lang.String getTaskActionOnBlockingInstances();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts"></a>

```java
public OutpostsCapacityTaskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

### OutpostsCapacityTaskInstancePool <a name="OutpostsCapacityTaskInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancePool;

OutpostsCapacityTaskInstancePool.builder()
    .count(java.lang.Number)
    .instanceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}.

---

### OutpostsCapacityTaskInstancesToExclude <a name="OutpostsCapacityTaskInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancesToExclude;

OutpostsCapacityTaskInstancesToExclude.builder()
    .instances(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}.

---

### OutpostsCapacityTaskTimeouts <a name="OutpostsCapacityTaskTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskTimeouts;

OutpostsCapacityTaskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsCapacityTaskInstancePoolList <a name="OutpostsCapacityTaskInstancePoolList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancePoolList;

new OutpostsCapacityTaskInstancePoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get"></a>

```java
public OutpostsCapacityTaskInstancePoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancePool> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>>

---


### OutpostsCapacityTaskInstancePoolOutputReference <a name="OutpostsCapacityTaskInstancePoolOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancePoolOutputReference;

new OutpostsCapacityTaskInstancePoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsCapacityTaskInstancePool getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>

---


### OutpostsCapacityTaskInstancesToExcludeList <a name="OutpostsCapacityTaskInstancesToExcludeList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancesToExcludeList;

new OutpostsCapacityTaskInstancesToExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get"></a>

```java
public OutpostsCapacityTaskInstancesToExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OutpostsCapacityTaskInstancesToExclude> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>>

---


### OutpostsCapacityTaskInstancesToExcludeOutputReference <a name="OutpostsCapacityTaskInstancesToExcludeOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskInstancesToExcludeOutputReference;

new OutpostsCapacityTaskInstancesToExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsCapacityTaskInstancesToExclude getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>

---


### OutpostsCapacityTaskTimeoutsOutputReference <a name="OutpostsCapacityTaskTimeoutsOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.outposts_capacity_task.OutpostsCapacityTaskTimeoutsOutputReference;

new OutpostsCapacityTaskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsCapacityTaskTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---



