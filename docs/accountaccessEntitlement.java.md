# `accountaccessEntitlement` Submodule <a name="`accountaccessEntitlement` Submodule" id="@cdktn/provider-aws.accountaccessEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountaccessEntitlement <a name="AccountaccessEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement aws_accountaccess_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlement;

AccountaccessEntitlement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationArn(java.lang.String)
//  .entitlement(IResolvable|java.util.List<AccountaccessEntitlementEntitlement>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.entitlement">entitlement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>></code> | entitlement block. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.applicationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}.

---

##### `entitlement`<sup>Optional</sup> <a name="entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.entitlement"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>>

entitlement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#region AccountaccessEntitlement#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement">putEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement">resetEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntitlement` <a name="putEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement"></a>

```java
public void putEntitlement(IResolvable|java.util.List<AccountaccessEntitlementEntitlement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>>

---

##### `resetEntitlement` <a name="resetEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement"></a>

```java
public void resetEntitlement()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlement;

AccountaccessEntitlement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlement;

AccountaccessEntitlement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlement;

AccountaccessEntitlement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlement;

AccountaccessEntitlement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccountaccessEntitlement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccountaccessEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccountaccessEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AccountaccessEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput">entitlementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement"></a>

```java
public AccountaccessEntitlementEntitlementList getEntitlement();
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a>

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `entitlementInput`<sup>Optional</sup> <a name="entitlementInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlement> getEntitlementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountaccessEntitlementConfig <a name="AccountaccessEntitlementConfig" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementConfig;

AccountaccessEntitlementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationArn(java.lang.String)
//  .entitlement(IResolvable|java.util.List<AccountaccessEntitlementEntitlement>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement">entitlement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>></code> | entitlement block. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}.

---

##### `entitlement`<sup>Optional</sup> <a name="entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlement> getEntitlement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>>

entitlement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#region AccountaccessEntitlement#region}

---

### AccountaccessEntitlementEntitlement <a name="AccountaccessEntitlementEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlement;

AccountaccessEntitlementEntitlement.builder()
//  .principalRole(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRole>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole">principalRole</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>></code> | principal_role block. |

---

##### `principalRole`<sup>Optional</sup> <a name="principalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRole> getPrincipalRole();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>>

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}

---

### AccountaccessEntitlementEntitlementPrincipalRole <a name="AccountaccessEntitlementEntitlementPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRole;

AccountaccessEntitlementEntitlementPrincipalRole.builder()
    .roleArn(java.lang.String)
//  .principal(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipal>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal">principal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>></code> | principal block. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipal> getPrincipal();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipal <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal;

AccountaccessEntitlementEntitlementPrincipalRolePrincipal.builder()
//  .identityCenter(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter">identityCenter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>></code> | identity_center block. |

---

##### `identityCenter`<sup>Optional</sup> <a name="identityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter> getIdentityCenter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>>

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter;

AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.builder()
//  .groupId(java.lang.String)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountaccessEntitlementEntitlementList <a name="AccountaccessEntitlementEntitlementList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementList;

new AccountaccessEntitlementEntitlementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get"></a>

```java
public AccountaccessEntitlementEntitlementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>>

---


### AccountaccessEntitlementEntitlementOutputReference <a name="AccountaccessEntitlementEntitlementOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementOutputReference;

new AccountaccessEntitlementEntitlementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole">putPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole">resetPrincipalRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalRole` <a name="putPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole"></a>

```java
public void putPrincipalRole(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRole> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>>

---

##### `resetPrincipalRole` <a name="resetPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole"></a>

```java
public void resetPrincipalRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole">principalRole</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput">principalRoleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalRole`<sup>Required</sup> <a name="principalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRoleList getPrincipalRole();
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a>

---

##### `principalRoleInput`<sup>Optional</sup> <a name="principalRoleInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRole> getPrincipalRoleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountaccessEntitlementEntitlement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

---


### AccountaccessEntitlementEntitlementPrincipalRoleList <a name="AccountaccessEntitlementEntitlementPrincipalRoleList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRoleList;

new AccountaccessEntitlementEntitlementPrincipalRoleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRoleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRole> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>>

---


### AccountaccessEntitlementEntitlementPrincipalRoleOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference;

new AccountaccessEntitlementEntitlementPrincipalRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal"></a>

```java
public void putPrincipal(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>>

---

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalList getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipal> getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRole getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipal> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.accountaccess_entitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter">putIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter">resetIdentityCenter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenter` <a name="putIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```java
public void putIdentityCenter(IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>>

---

##### `resetIdentityCenter` <a name="resetIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```java
public void resetIdentityCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">identityCenter</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput">identityCenterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityCenter`<sup>Required</sup> <a name="identityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```java
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList getIdentityCenter();
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `identityCenterInput`<sup>Optional</sup> <a name="identityCenterInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```java
public IResolvable|java.util.List<AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter> getIdentityCenterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

---



