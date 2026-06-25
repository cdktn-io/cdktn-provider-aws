# `elasticacheReservedCacheNode` Submodule <a name="`elasticacheReservedCacheNode` Submodule" id="@cdktn/provider-aws.elasticacheReservedCacheNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReservedCacheNode <a name="ElasticacheReservedCacheNode" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNode;

ElasticacheReservedCacheNode.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reservedCacheNodesOfferingId(java.lang.String)
//  .cacheNodeCount(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheReservedCacheNodeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.reservedCacheNodesOfferingId">reservedCacheNodesOfferingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.cacheNodeCount">cacheNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="reservedCacheNodesOfferingId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.reservedCacheNodesOfferingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `cacheNodeCount`<sup>Optional</sup> <a name="cacheNodeCount" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.cacheNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#region ElasticacheReservedCacheNode#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount">resetCacheNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts"></a>

```java
public void putTimeouts(ElasticacheReservedCacheNodeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---

##### `resetCacheNodeCount` <a name="resetCacheNodeCount" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount"></a>

```java
public void resetCacheNodeCount()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheReservedCacheNode resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNode;

ElasticacheReservedCacheNode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNode;

ElasticacheReservedCacheNode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNode;

ElasticacheReservedCacheNode.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNode;

ElasticacheReservedCacheNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticacheReservedCacheNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticacheReservedCacheNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticacheReservedCacheNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticacheReservedCacheNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheReservedCacheNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType">cacheNodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice">fixedPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType">offeringType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription">productDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges">recurringCharges</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice">usagePrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput">cacheNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput">reservedCacheNodesOfferingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount">cacheNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId">reservedCacheNodesOfferingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType"></a>

```java
public java.lang.String getCacheNodeType();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `fixedPrice`<sup>Required</sup> <a name="fixedPrice" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice"></a>

```java
public java.lang.Number getFixedPrice();
```

- *Type:* java.lang.Number

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType"></a>

```java
public java.lang.String getOfferingType();
```

- *Type:* java.lang.String

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription"></a>

```java
public java.lang.String getProductDescription();
```

- *Type:* java.lang.String

---

##### `recurringCharges`<sup>Required</sup> <a name="recurringCharges" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges"></a>

```java
public ElasticacheReservedCacheNodeRecurringChargesList getRecurringCharges();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts"></a>

```java
public ElasticacheReservedCacheNodeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a>

---

##### `usagePrice`<sup>Required</sup> <a name="usagePrice" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice"></a>

```java
public java.lang.Number getUsagePrice();
```

- *Type:* java.lang.Number

---

##### `cacheNodeCountInput`<sup>Optional</sup> <a name="cacheNodeCountInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput"></a>

```java
public java.lang.Number getCacheNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservedCacheNodesOfferingIdInput`<sup>Optional</sup> <a name="reservedCacheNodesOfferingIdInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput"></a>

```java
public java.lang.String getReservedCacheNodesOfferingIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput"></a>

```java
public IResolvable|ElasticacheReservedCacheNodeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---

##### `cacheNodeCount`<sup>Required</sup> <a name="cacheNodeCount" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount"></a>

```java
public java.lang.Number getCacheNodeCount();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="reservedCacheNodesOfferingId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

```java
public java.lang.String getReservedCacheNodesOfferingId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReservedCacheNodeConfig <a name="ElasticacheReservedCacheNodeConfig" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeConfig;

ElasticacheReservedCacheNodeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reservedCacheNodesOfferingId(java.lang.String)
//  .cacheNodeCount(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheReservedCacheNodeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId">reservedCacheNodesOfferingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount">cacheNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="reservedCacheNodesOfferingId" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId"></a>

```java
public java.lang.String getReservedCacheNodesOfferingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `cacheNodeCount`<sup>Optional</sup> <a name="cacheNodeCount" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount"></a>

```java
public java.lang.Number getCacheNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#region ElasticacheReservedCacheNode#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts"></a>

```java
public ElasticacheReservedCacheNodeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

### ElasticacheReservedCacheNodeRecurringCharges <a name="ElasticacheReservedCacheNodeRecurringCharges" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeRecurringCharges;

ElasticacheReservedCacheNodeRecurringCharges.builder()
    .build();
```


### ElasticacheReservedCacheNodeTimeouts <a name="ElasticacheReservedCacheNodeTimeouts" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeTimeouts;

ElasticacheReservedCacheNodeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReservedCacheNodeRecurringChargesList <a name="ElasticacheReservedCacheNodeRecurringChargesList" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeRecurringChargesList;

new ElasticacheReservedCacheNodeRecurringChargesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get"></a>

```java
public ElasticacheReservedCacheNodeRecurringChargesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticacheReservedCacheNodeRecurringChargesOutputReference <a name="ElasticacheReservedCacheNodeRecurringChargesOutputReference" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeRecurringChargesOutputReference;

new ElasticacheReservedCacheNodeRecurringChargesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount">recurringChargeAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency">recurringChargeFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurringChargeAmount`<sup>Required</sup> <a name="recurringChargeAmount" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```java
public java.lang.Number getRecurringChargeAmount();
```

- *Type:* java.lang.Number

---

##### `recurringChargeFrequency`<sup>Required</sup> <a name="recurringChargeFrequency" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```java
public java.lang.String getRecurringChargeFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue"></a>

```java
public ElasticacheReservedCacheNodeRecurringCharges getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a>

---


### ElasticacheReservedCacheNodeTimeoutsOutputReference <a name="ElasticacheReservedCacheNodeTimeoutsOutputReference" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_reserved_cache_node.ElasticacheReservedCacheNodeTimeoutsOutputReference;

new ElasticacheReservedCacheNodeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReservedCacheNodeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---



