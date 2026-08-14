# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktn/provider-aws.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection aws_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .collectionGroupName(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfig(IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig>)
//  .region(java.lang.String)
//  .standbyReplicas(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchserverlessCollectionTimeouts)
//  .type(java.lang.String)
//  .vectorOptions(IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | Name of the collection group to associate with this collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions">vectorOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collectionGroupName`<sup>Optional</sup> <a name="collectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName"></a>

- *Type:* java.lang.String

Name of the collection group to associate with this collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#region OpensearchserverlessCollection#region}

---

##### `standbyReplicas`<sup>Optional</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas"></a>

- *Type:* java.lang.String

Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#timeouts OpensearchserverlessCollection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vectorOptions`<sup>Optional</sup> <a name="vectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions">putVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName">resetCollectionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">resetStandbyReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions">resetVectorOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts"></a>

```java
public void putTimeouts(OpensearchserverlessCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---

##### `putVectorOptions` <a name="putVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions"></a>

```java
public void putVectorOptions(IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>>

---

##### `resetCollectionGroupName` <a name="resetCollectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName"></a>

```java
public void resetCollectionGroupName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStandbyReplicas` <a name="resetStandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```java
public void resetStandbyReplicas()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```java
public void resetType()
```

##### `resetVectorOptions` <a name="resetVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions"></a>

```java
public void resetVectorOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserverlessCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">collectionEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">dashboardEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList">OpensearchserverlessCollectionEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions">vectorOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList">OpensearchserverlessCollectionVectorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput">collectionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">standbyReplicasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput">vectorOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `collectionEndpoint`<sup>Required</sup> <a name="collectionEndpoint" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```java
public java.lang.String getCollectionEndpoint();
```

- *Type:* java.lang.String

---

##### `dashboardEndpoint`<sup>Required</sup> <a name="dashboardEndpoint" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```java
public java.lang.String getDashboardEndpoint();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig"></a>

```java
public OpensearchserverlessCollectionEncryptionConfigList getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList">OpensearchserverlessCollectionEncryptionConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts"></a>

```java
public OpensearchserverlessCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a>

---

##### `vectorOptions`<sup>Required</sup> <a name="vectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions"></a>

```java
public OpensearchserverlessCollectionVectorOptionsList getVectorOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList">OpensearchserverlessCollectionVectorOptionsList</a>

---

##### `collectionGroupNameInput`<sup>Optional</sup> <a name="collectionGroupNameInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput"></a>

```java
public java.lang.String getCollectionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig> getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `standbyReplicasInput`<sup>Optional</sup> <a name="standbyReplicasInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```java
public java.lang.String getStandbyReplicasInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput"></a>

```java
public IResolvable|OpensearchserverlessCollectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vectorOptionsInput`<sup>Optional</sup> <a name="vectorOptionsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions> getVectorOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>>

---

##### `collectionGroupName`<sup>Required</sup> <a name="collectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName"></a>

```java
public java.lang.String getCollectionGroupName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionConfig;

OpensearchserverlessCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .collectionGroupName(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfig(IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig>)
//  .region(java.lang.String)
//  .standbyReplicas(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchserverlessCollectionTimeouts)
//  .type(java.lang.String)
//  .vectorOptions(IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | Name of the collection group to associate with this collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig">encryptionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions">vectorOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collectionGroupName`<sup>Optional</sup> <a name="collectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName"></a>

```java
public java.lang.String getCollectionGroupName();
```

- *Type:* java.lang.String

Name of the collection group to associate with this collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig> getEncryptionConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#region OpensearchserverlessCollection#region}

---

##### `standbyReplicas`<sup>Optional</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts"></a>

```java
public OpensearchserverlessCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#timeouts OpensearchserverlessCollection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vectorOptions`<sup>Optional</sup> <a name="vectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions> getVectorOptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}.

---

### OpensearchserverlessCollectionEncryptionConfig <a name="OpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionEncryptionConfig;

OpensearchserverlessCollectionEncryptionConfig.builder()
//  .awsOwnedKey(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey">awsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}. |

---

##### `awsOwnedKey`<sup>Optional</sup> <a name="awsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}.

---

### OpensearchserverlessCollectionTimeouts <a name="OpensearchserverlessCollectionTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionTimeouts;

OpensearchserverlessCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#create OpensearchserverlessCollection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#delete OpensearchserverlessCollection#delete}

---

### OpensearchserverlessCollectionVectorOptions <a name="OpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionVectorOptions;

OpensearchserverlessCollectionVectorOptions.builder()
//  .serverlessVectorAcceleration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}. |

---

##### `serverlessVectorAcceleration`<sup>Optional</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration"></a>

```java
public java.lang.String getServerlessVectorAcceleration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionEncryptionConfigList <a name="OpensearchserverlessCollectionEncryptionConfigList" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionEncryptionConfigList;

new OpensearchserverlessCollectionEncryptionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get"></a>

```java
public OpensearchserverlessCollectionEncryptionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionEncryptionConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>>

---


### OpensearchserverlessCollectionEncryptionConfigOutputReference <a name="OpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionEncryptionConfigOutputReference;

new OpensearchserverlessCollectionEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey">resetAwsOwnedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsOwnedKey` <a name="resetAwsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey"></a>

```java
public void resetAwsOwnedKey()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput">awsOwnedKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">awsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsOwnedKeyInput`<sup>Optional</sup> <a name="awsOwnedKeyInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `awsOwnedKey`<sup>Required</sup> <a name="awsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---


### OpensearchserverlessCollectionTimeoutsOutputReference <a name="OpensearchserverlessCollectionTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionTimeoutsOutputReference;

new OpensearchserverlessCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---


### OpensearchserverlessCollectionVectorOptionsList <a name="OpensearchserverlessCollectionVectorOptionsList" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionVectorOptionsList;

new OpensearchserverlessCollectionVectorOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get"></a>

```java
public OpensearchserverlessCollectionVectorOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionVectorOptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>>

---


### OpensearchserverlessCollectionVectorOptionsOutputReference <a name="OpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearchserverless_collection.OpensearchserverlessCollectionVectorOptionsOutputReference;

new OpensearchserverlessCollectionVectorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration">resetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerlessVectorAcceleration` <a name="resetServerlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```java
public void resetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput">serverlessVectorAccelerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverlessVectorAccelerationInput`<sup>Optional</sup> <a name="serverlessVectorAccelerationInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```java
public java.lang.String getServerlessVectorAccelerationInput();
```

- *Type:* java.lang.String

---

##### `serverlessVectorAcceleration`<sup>Required</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```java
public java.lang.String getServerlessVectorAcceleration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionVectorOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---



