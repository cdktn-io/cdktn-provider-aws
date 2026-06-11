# `notificationsOrganizationalUnitAssociation` Submodule <a name="`notificationsOrganizationalUnitAssociation` Submodule" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsOrganizationalUnitAssociation <a name="NotificationsOrganizationalUnitAssociation" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association aws_notifications_organizational_unit_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociation;

NotificationsOrganizationalUnitAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .notificationConfigurationArn(java.lang.String)
    .organizationalUnitId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.notificationConfigurationArn">notificationConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.organizationalUnitId">organizationalUnitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationConfigurationArn`<sup>Required</sup> <a name="notificationConfigurationArn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.notificationConfigurationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}.

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.organizationalUnitId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsOrganizationalUnitAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociation;

NotificationsOrganizationalUnitAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociation;

NotificationsOrganizationalUnitAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociation;

NotificationsOrganizationalUnitAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociation;

NotificationsOrganizationalUnitAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationsOrganizationalUnitAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NotificationsOrganizationalUnitAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationsOrganizationalUnitAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationsOrganizationalUnitAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsOrganizationalUnitAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArnInput">notificationConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitIdInput">organizationalUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArn">notificationConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitId">organizationalUnitId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationConfigurationArnInput`<sup>Optional</sup> <a name="notificationConfigurationArnInput" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArnInput"></a>

```java
public java.lang.String getNotificationConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitIdInput`<sup>Optional</sup> <a name="organizationalUnitIdInput" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitIdInput"></a>

```java
public java.lang.String getOrganizationalUnitIdInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigurationArn`<sup>Required</sup> <a name="notificationConfigurationArn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArn"></a>

```java
public java.lang.String getNotificationConfigurationArn();
```

- *Type:* java.lang.String

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitId"></a>

```java
public java.lang.String getOrganizationalUnitId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsOrganizationalUnitAssociationConfig <a name="NotificationsOrganizationalUnitAssociationConfig" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.notifications_organizational_unit_association.NotificationsOrganizationalUnitAssociationConfig;

NotificationsOrganizationalUnitAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .notificationConfigurationArn(java.lang.String)
    .organizationalUnitId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.notificationConfigurationArn">notificationConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.organizationalUnitId">organizationalUnitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationConfigurationArn`<sup>Required</sup> <a name="notificationConfigurationArn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.notificationConfigurationArn"></a>

```java
public java.lang.String getNotificationConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}.

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.organizationalUnitId"></a>

```java
public java.lang.String getOrganizationalUnitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}.

---



