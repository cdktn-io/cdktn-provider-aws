# `identitystoreGroupMembership` Submodule <a name="`identitystoreGroupMembership` Submodule" id="@cdktn/provider-aws.identitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreGroupMembership <a name="IdentitystoreGroupMembership" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership aws_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembership;

IdentitystoreGroupMembership.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.String)
    .identityStoreId(java.lang.String)
    .memberId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.memberId">memberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.identityStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.memberId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#region IdentitystoreGroupMembership#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembership;

IdentitystoreGroupMembership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembership;

IdentitystoreGroupMembership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembership;

IdentitystoreGroupMembership.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembership;

IdentitystoreGroupMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentitystoreGroupMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentitystoreGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentitystoreGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput">memberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput"></a>

```java
public java.lang.String getIdentityStoreIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput"></a>

```java
public java.lang.String getMemberIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreGroupMembershipConfig <a name="IdentitystoreGroupMembershipConfig" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.identitystore_group_membership.IdentitystoreGroupMembershipConfig;

IdentitystoreGroupMembershipConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.String)
    .identityStoreId(java.lang.String)
    .memberId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId">memberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}. |
| <code><a href="#@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/identitystore_group_membership#region IdentitystoreGroupMembership#region}

---



