# `cloudtrailOrganizationDelegatedAdminAccount` Submodule <a name="`cloudtrailOrganizationDelegatedAdminAccount` Submodule" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailOrganizationDelegatedAdminAccount <a name="CloudtrailOrganizationDelegatedAdminAccount" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccount;

CloudtrailOrganizationDelegatedAdminAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccount;

CloudtrailOrganizationDelegatedAdminAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccount;

CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccount;

CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccount;

CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudtrailOrganizationDelegatedAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudtrailOrganizationDelegatedAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailOrganizationDelegatedAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal">servicePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal"></a>

```java
public java.lang.String getServicePrincipal();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailOrganizationDelegatedAdminAccountConfig <a name="CloudtrailOrganizationDelegatedAdminAccountConfig" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudtrail_organization_delegated_admin_account.CloudtrailOrganizationDelegatedAdminAccountConfig;

CloudtrailOrganizationDelegatedAdminAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---



