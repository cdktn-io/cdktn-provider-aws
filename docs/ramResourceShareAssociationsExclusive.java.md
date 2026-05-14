# `ramResourceShareAssociationsExclusive` Submodule <a name="`ramResourceShareAssociationsExclusive` Submodule" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShareAssociationsExclusive <a name="RamResourceShareAssociationsExclusive" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive aws_ram_resource_share_associations_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusive;

RamResourceShareAssociationsExclusive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceShareArn(java.lang.String)
//  .principals(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .resourceArns(java.util.List<java.lang.String>)
//  .sources(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.resourceShareArn">resourceShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.resourceShareArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.principals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#region RamResourceShareAssociationsExclusive#region}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.resourceArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.sources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources">resetSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals"></a>

```java
public void resetPrincipals()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns"></a>

```java
public void resetResourceArns()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources"></a>

```java
public void resetSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusive;

RamResourceShareAssociationsExclusive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusive;

RamResourceShareAssociationsExclusive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusive;

RamResourceShareAssociationsExclusive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusive;

RamResourceShareAssociationsExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RamResourceShareAssociationsExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RamResourceShareAssociationsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RamResourceShareAssociationsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShareAssociationsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput">resourceShareArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput">sourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn">resourceShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceShareArnInput`<sup>Optional</sup> <a name="resourceShareArnInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput"></a>

```java
public java.lang.String getResourceShareArnInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput"></a>

```java
public java.util.List<java.lang.String> getSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn"></a>

```java
public java.lang.String getResourceShareArn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareAssociationsExclusiveConfig <a name="RamResourceShareAssociationsExclusiveConfig" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ram_resource_share_associations_exclusive.RamResourceShareAssociationsExclusiveConfig;

RamResourceShareAssociationsExclusiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceShareArn(java.lang.String)
//  .principals(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .resourceArns(java.util.List<java.lang.String>)
//  .sources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn">resourceShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn"></a>

```java
public java.lang.String getResourceShareArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#region RamResourceShareAssociationsExclusive#region}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}.

---



