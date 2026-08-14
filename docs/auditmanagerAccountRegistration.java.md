# `auditmanagerAccountRegistration` Submodule <a name="`auditmanagerAccountRegistration` Submodule" id="@cdktn/provider-aws.auditmanagerAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAccountRegistration <a name="AuditmanagerAccountRegistration" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .delegatedAdminAccount(java.lang.String)
//  .deregisterOnDestroy(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `delegatedAdminAccount`<sup>Optional</sup> <a name="delegatedAdminAccount" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.delegatedAdminAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}.

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#region AuditmanagerAccountRegistration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount">resetDelegatedAdminAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy">resetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDelegatedAdminAccount` <a name="resetDelegatedAdminAccount" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount"></a>

```java
public void resetDelegatedAdminAccount()
```

##### `resetDeregisterOnDestroy` <a name="resetDeregisterOnDestroy" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy"></a>

```java
public void resetDeregisterOnDestroy()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAccountRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuditmanagerAccountRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AuditmanagerAccountRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuditmanagerAccountRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuditmanagerAccountRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAccountRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput">delegatedAdminAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput">deregisterOnDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `delegatedAdminAccountInput`<sup>Optional</sup> <a name="delegatedAdminAccountInput" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput"></a>

```java
public java.lang.String getDelegatedAdminAccountInput();
```

- *Type:* java.lang.String

---

##### `deregisterOnDestroyInput`<sup>Optional</sup> <a name="deregisterOnDestroyInput" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getDeregisterOnDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `delegatedAdminAccount`<sup>Required</sup> <a name="delegatedAdminAccount" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount"></a>

```java
public java.lang.String getDelegatedAdminAccount();
```

- *Type:* java.lang.String

---

##### `deregisterOnDestroy`<sup>Required</sup> <a name="deregisterOnDestroy" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAccountRegistrationConfig <a name="AuditmanagerAccountRegistrationConfig" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistrationConfig;

AuditmanagerAccountRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .delegatedAdminAccount(java.lang.String)
//  .deregisterOnDestroy(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `delegatedAdminAccount`<sup>Optional</sup> <a name="delegatedAdminAccount" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount"></a>

```java
public java.lang.String getDelegatedAdminAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}.

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/auditmanager_account_registration#region AuditmanagerAccountRegistration#region}

---



