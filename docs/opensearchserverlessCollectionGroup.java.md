# `opensearchserverlessCollectionGroup` Submodule <a name="`opensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollectionGroup <a name="OpensearchserverlessCollectionGroup" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroup;

OpensearchserverlessCollectionGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .standbyReplicas(java.lang.String)
//  .capacityLimits(IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.capacityLimits">capacityLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.standbyReplicas"></a>

- *Type:* java.lang.String

Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `capacityLimits`<sup>Optional</sup> <a name="capacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.capacityLimits"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits">putCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits">resetCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityLimits` <a name="putCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits"></a>

```java
public void putCapacityLimits(IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>>

---

##### `resetCapacityLimits` <a name="resetCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits"></a>

```java
public void resetCapacityLimits()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroup;

OpensearchserverlessCollectionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroup;

OpensearchserverlessCollectionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroup;

OpensearchserverlessCollectionGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroup;

OpensearchserverlessCollectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserverlessCollectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserverlessCollectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput">capacityLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput">standbyReplicasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```java
public OpensearchserverlessCollectionGroupCapacityLimitsList getCapacityLimits();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `capacityLimitsInput`<sup>Optional</sup> <a name="capacityLimitsInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits> getCapacityLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `standbyReplicasInput`<sup>Optional</sup> <a name="standbyReplicasInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput"></a>

```java
public java.lang.String getStandbyReplicasInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionGroupCapacityLimits <a name="OpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroupCapacityLimits;

OpensearchserverlessCollectionGroupCapacityLimits.builder()
//  .maxIndexingCapacityInOcu(java.lang.Number)
//  .maxSearchCapacityInOcu(java.lang.Number)
//  .minIndexingCapacityInOcu(java.lang.Number)
//  .minSearchCapacityInOcu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}. |

---

##### `maxIndexingCapacityInOcu`<sup>Optional</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMaxIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}.

---

##### `maxSearchCapacityInOcu`<sup>Optional</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu"></a>

```java
public java.lang.Number getMaxSearchCapacityInOcu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}.

---

##### `minIndexingCapacityInOcu`<sup>Optional</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMinIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}.

---

##### `minSearchCapacityInOcu`<sup>Optional</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu"></a>

```java
public java.lang.Number getMinSearchCapacityInOcu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}.

---

### OpensearchserverlessCollectionGroupConfig <a name="OpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroupConfig;

OpensearchserverlessCollectionGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .standbyReplicas(java.lang.String)
//  .capacityLimits(IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits">capacityLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `capacityLimits`<sup>Optional</sup> <a name="capacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits> getCapacityLimits();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionGroupCapacityLimitsList <a name="OpensearchserverlessCollectionGroupCapacityLimitsList" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroupCapacityLimitsList;

new OpensearchserverlessCollectionGroupCapacityLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get"></a>

```java
public OpensearchserverlessCollectionGroupCapacityLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionGroupCapacityLimits> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>>

---


### OpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="OpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection_group.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference;

new OpensearchserverlessCollectionGroupCapacityLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu">resetMaxIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu">resetMaxSearchCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu">resetMinIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu">resetMinSearchCapacityInOcu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIndexingCapacityInOcu` <a name="resetMaxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu"></a>

```java
public void resetMaxIndexingCapacityInOcu()
```

##### `resetMaxSearchCapacityInOcu` <a name="resetMaxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu"></a>

```java
public void resetMaxSearchCapacityInOcu()
```

##### `resetMinIndexingCapacityInOcu` <a name="resetMinIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu"></a>

```java
public void resetMinIndexingCapacityInOcu()
```

##### `resetMinSearchCapacityInOcu` <a name="resetMinSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu"></a>

```java
public void resetMinSearchCapacityInOcu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput">maxIndexingCapacityInOcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput">maxSearchCapacityInOcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput">minIndexingCapacityInOcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput">minSearchCapacityInOcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="maxIndexingCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput"></a>

```java
public java.lang.Number getMaxIndexingCapacityInOcuInput();
```

- *Type:* java.lang.Number

---

##### `maxSearchCapacityInOcuInput`<sup>Optional</sup> <a name="maxSearchCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput"></a>

```java
public java.lang.Number getMaxSearchCapacityInOcuInput();
```

- *Type:* java.lang.Number

---

##### `minIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="minIndexingCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput"></a>

```java
public java.lang.Number getMinIndexingCapacityInOcuInput();
```

- *Type:* java.lang.Number

---

##### `minSearchCapacityInOcuInput`<sup>Optional</sup> <a name="minSearchCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput"></a>

```java
public java.lang.Number getMinSearchCapacityInOcuInput();
```

- *Type:* java.lang.Number

---

##### `maxIndexingCapacityInOcu`<sup>Required</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMaxIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `maxSearchCapacityInOcu`<sup>Required</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```java
public java.lang.Number getMaxSearchCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `minIndexingCapacityInOcu`<sup>Required</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMinIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `minSearchCapacityInOcu`<sup>Required</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```java
public java.lang.Number getMinSearchCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionGroupCapacityLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---



