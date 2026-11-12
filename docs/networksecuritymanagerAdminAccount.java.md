# `networksecuritymanagerAdminAccount` Submodule <a name="`networksecuritymanagerAdminAccount` Submodule" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerAdminAccount <a name="NetworksecuritymanagerAdminAccount" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccount;

NetworksecuritymanagerAdminAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .priority(java.lang.Number)
//  .adminScope(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope>)
//  .region(java.lang.String)
//  .timeouts(NetworksecuritymanagerAdminAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.adminScope">adminScope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>></code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.adminScope"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>>

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope">putAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope">resetAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminScope` <a name="putAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope"></a>

```java
public void putAdminScope(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts"></a>

```java
public void putTimeouts(NetworksecuritymanagerAdminAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `resetAdminScope` <a name="resetAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope"></a>

```java
public void resetAdminScope()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccount;

NetworksecuritymanagerAdminAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccount;

NetworksecuritymanagerAdminAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccount;

NetworksecuritymanagerAdminAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccount;

NetworksecuritymanagerAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworksecuritymanagerAdminAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworksecuritymanagerAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope">adminScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput">adminScopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeList getAdminScope();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts"></a>

```java
public NetworksecuritymanagerAdminAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `adminScopeInput`<sup>Optional</sup> <a name="adminScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope> getAdminScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerAdminAccountAdminScope <a name="NetworksecuritymanagerAdminAccountAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScope;

NetworksecuritymanagerAdminAccountAdminScope.builder()
//  .firewallTypeScope(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope>)
//  .scopeFilter(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope">firewallTypeScope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>></code> | firewall_type_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter">scopeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>></code> | scope_filter block. |

---

##### `firewallTypeScope`<sup>Optional</sup> <a name="firewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope> getFirewallTypeScope();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>>

firewall_type_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}

---

##### `scopeFilter`<sup>Optional</sup> <a name="scopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilter> getScopeFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>>

scope_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}

---

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope;

NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.builder()
//  .allFirewallTypesEnabled(java.lang.Boolean|IResolvable)
//  .firewallTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled">allFirewallTypesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes">firewallTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}. |

---

##### `allFirewallTypesEnabled`<sup>Optional</sup> <a name="allFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAllFirewallTypesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}.

---

##### `firewallTypes`<sup>Optional</sup> <a name="firewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes"></a>

```java
public java.util.List<java.lang.String> getFirewallTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilter <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter;

NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.builder()
//  .excludeOnly(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly>)
//  .includeAll(java.lang.Boolean|IResolvable)
//  .includeOnly(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly">excludeOnly</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>></code> | exclude_only block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly">includeOnly</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>></code> | include_only block. |

---

##### `excludeOnly`<sup>Optional</sup> <a name="excludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly> getExcludeOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>>

exclude_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}.

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly> getIncludeOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>>

include_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly;

NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.builder()
//  .accounts(java.util.List<java.lang.String>)
//  .organizationalUnits(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly;

NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.builder()
//  .accounts(java.util.List<java.lang.String>)
//  .organizationalUnits(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountConfig <a name="NetworksecuritymanagerAdminAccountConfig" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountConfig;

NetworksecuritymanagerAdminAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .priority(java.lang.Number)
//  .adminScope(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope>)
//  .region(java.lang.String)
//  .timeouts(NetworksecuritymanagerAdminAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope">adminScope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>></code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope> getAdminScope();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>>

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts"></a>

```java
public NetworksecuritymanagerAdminAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

### NetworksecuritymanagerAdminAccountTimeouts <a name="NetworksecuritymanagerAdminAccountTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountTimeouts;

NetworksecuritymanagerAdminAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList;

new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>>

---


### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference;

new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled">resetAllFirewallTypesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes">resetFirewallTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllFirewallTypesEnabled` <a name="resetAllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled"></a>

```java
public void resetAllFirewallTypesEnabled()
```

##### `resetFirewallTypes` <a name="resetFirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes"></a>

```java
public void resetFirewallTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput">allFirewallTypesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput">firewallTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled">allFirewallTypesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes">firewallTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allFirewallTypesEnabledInput`<sup>Optional</sup> <a name="allFirewallTypesEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAllFirewallTypesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `firewallTypesInput`<sup>Optional</sup> <a name="firewallTypesInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput"></a>

```java
public java.util.List<java.lang.String> getFirewallTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allFirewallTypesEnabled`<sup>Required</sup> <a name="allFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAllFirewallTypesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `firewallTypes`<sup>Required</sup> <a name="firewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes"></a>

```java
public java.util.List<java.lang.String> getFirewallTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeList;

new NetworksecuritymanagerAdminAccountAdminScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScope> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>>

---


### NetworksecuritymanagerAdminAccountAdminScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeOutputReference;

new NetworksecuritymanagerAdminAccountAdminScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope">putFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter">putScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope">resetFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter">resetScopeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallTypeScope` <a name="putFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope"></a>

```java
public void putFirewallTypeScope(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>>

---

##### `putScopeFilter` <a name="putScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter"></a>

```java
public void putScopeFilter(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>>

---

##### `resetFirewallTypeScope` <a name="resetFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope"></a>

```java
public void resetFirewallTypeScope()
```

##### `resetScopeFilter` <a name="resetScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter"></a>

```java
public void resetScopeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope">firewallTypeScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter">scopeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput">firewallTypeScopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput">scopeFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firewallTypeScope`<sup>Required</sup> <a name="firewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList getFirewallTypeScope();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a>

---

##### `scopeFilter`<sup>Required</sup> <a name="scopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList getScopeFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a>

---

##### `firewallTypeScopeInput`<sup>Optional</sup> <a name="firewallTypeScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope> getFirewallTypeScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>>

---

##### `scopeFilterInput`<sup>Optional</sup> <a name="scopeFilterInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilter> getScopeFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountAdminScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts"></a>

```java
public void resetAccounts()
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits"></a>

```java
public void resetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput">accountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput"></a>

```java
public java.util.List<java.lang.String> getAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts"></a>

```java
public void resetAccounts()
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits"></a>

```java
public void resetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput">accountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput"></a>

```java
public java.util.List<java.lang.String> getAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference;

new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly">putExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly">putIncludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly">resetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludeOnly` <a name="putExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly"></a>

```java
public void putExcludeOnly(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>>

---

##### `putIncludeOnly` <a name="putIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly"></a>

```java
public void putIncludeOnly(IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>>

---

##### `resetExcludeOnly` <a name="resetExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly"></a>

```java
public void resetExcludeOnly()
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll"></a>

```java
public void resetIncludeAll()
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly"></a>

```java
public void resetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly">excludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly">includeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput">excludeOnlyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeOnly`<sup>Required</sup> <a name="excludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList getExcludeOnly();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a>

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly"></a>

```java
public NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList getIncludeOnly();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a>

---

##### `excludeOnlyInput`<sup>Optional</sup> <a name="excludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly> getExcludeOnlyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>>

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly> getIncludeOnlyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>>

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountAdminScopeScopeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>

---


### NetworksecuritymanagerAdminAccountTimeoutsOutputReference <a name="NetworksecuritymanagerAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_admin_account.NetworksecuritymanagerAdminAccountTimeoutsOutputReference;

new NetworksecuritymanagerAdminAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerAdminAccountTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---



