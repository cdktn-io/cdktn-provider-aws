# `inspector2DelegatedAdminAccount` Submodule <a name="`inspector2DelegatedAdminAccount` Submodule" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2DelegatedAdminAccount <a name="Inspector2DelegatedAdminAccount" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(Inspector2DelegatedAdminAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#region Inspector2DelegatedAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts"></a>

```java
public void putTimeouts(Inspector2DelegatedAdminAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Inspector2DelegatedAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Inspector2DelegatedAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Inspector2DelegatedAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Inspector2DelegatedAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Inspector2DelegatedAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Inspector2DelegatedAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus">relationshipStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `relationshipStatus`<sup>Required</sup> <a name="relationshipStatus" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus"></a>

```java
public java.lang.String getRelationshipStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts"></a>

```java
public Inspector2DelegatedAdminAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput"></a>

```java
public IResolvable|Inspector2DelegatedAdminAccountTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2DelegatedAdminAccountConfig <a name="Inspector2DelegatedAdminAccountConfig" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountConfig;

Inspector2DelegatedAdminAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(Inspector2DelegatedAdminAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#region Inspector2DelegatedAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts"></a>

```java
public Inspector2DelegatedAdminAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

### Inspector2DelegatedAdminAccountTimeouts <a name="Inspector2DelegatedAdminAccountTimeouts" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountTimeouts;

Inspector2DelegatedAdminAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2DelegatedAdminAccountTimeoutsOutputReference <a name="Inspector2DelegatedAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountTimeoutsOutputReference;

new Inspector2DelegatedAdminAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspector2DelegatedAdminAccountTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---



