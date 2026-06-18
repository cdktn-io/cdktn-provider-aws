# `notificationsManagedNotificationAdditionalChannelAssociation` Submodule <a name="`notificationsManagedNotificationAdditionalChannelAssociation` Submodule" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociation <a name="NotificationsManagedNotificationAdditionalChannelAssociation" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association aws_notifications_managed_notification_additional_channel_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociation;

NotificationsManagedNotificationAdditionalChannelAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelArn(java.lang.String)
    .managedNotificationArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.channelArn">channelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.managedNotificationArn">managedNotificationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.channelArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}.

---

##### `managedNotificationArn`<sup>Required</sup> <a name="managedNotificationArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.managedNotificationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociation;

NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociation;

NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociation;

NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociation;

NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationsManagedNotificationAdditionalChannelAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationsManagedNotificationAdditionalChannelAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsManagedNotificationAdditionalChannelAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput">channelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArnInput">managedNotificationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArn">managedNotificationArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelArnInput`<sup>Optional</sup> <a name="channelArnInput" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput"></a>

```java
public java.lang.String getChannelArnInput();
```

- *Type:* java.lang.String

---

##### `managedNotificationArnInput`<sup>Optional</sup> <a name="managedNotificationArnInput" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArnInput"></a>

```java
public java.lang.String getManagedNotificationArnInput();
```

- *Type:* java.lang.String

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

---

##### `managedNotificationArn`<sup>Required</sup> <a name="managedNotificationArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArn"></a>

```java
public java.lang.String getManagedNotificationArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociationConfig <a name="NotificationsManagedNotificationAdditionalChannelAssociationConfig" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.notifications_managed_notification_additional_channel_association.NotificationsManagedNotificationAdditionalChannelAssociationConfig;

NotificationsManagedNotificationAdditionalChannelAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelArn(java.lang.String)
    .managedNotificationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationArn">managedNotificationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}.

---

##### `managedNotificationArn`<sup>Required</sup> <a name="managedNotificationArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationArn"></a>

```java
public java.lang.String getManagedNotificationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}.

---



